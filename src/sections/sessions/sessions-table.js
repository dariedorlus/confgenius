import PropTypes from "prop-types";
import { format } from "date-fns";
import {
  Avatar,
  Box,
  Card,
  Checkbox,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
} from "@mui/material";
import { Scrollbar } from "src/components/scrollbar";
import { getInitials } from "src/utils/get-initials";

export const SessionsTable = (props) => {
  const {
    count = 0,
    items = [],
    onDeselectAll,
    onDeselectOne,
    onPageChange = () => {},
    onRowsPerPageChange,
    onSelectAll,
    onSelectOne,
    page = 0,
    rowsPerPage = 25,
    selected = [],
  } = props;

  const selectedSome = selected.length > 0 && selected.length < items.length;
  const selectedAll = items.length > 0 && selected.length === items.length;
  return (
    <Card>
      <Scrollbar>
        <Box sx={{ minWidth: 800 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell padding="checkbox">
                  <Checkbox
                    checked={selectedAll}
                    indeterminate={selectedSome}
                    onChange={(event) => {
                      if (event.target.checked) {
                        onSelectAll?.();
                      } else {
                        onDeselectAll?.();
                      }
                    }}
                  />
                </TableCell>
                <TableCell>Speaker Name</TableCell>
                <TableCell>Title</TableCell>
                <TableCell>Speaker Picture</TableCell>
                <TableCell>Category</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Time</TableCell>
                <TableCell>Room</TableCell>
                <TableCell>Floor</TableCell>
                <TableCell>Location</TableCell>
                <TableCell>Date</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {items.map((session) => {
                const isSelected = selected.includes(session.id);
                const sessionDate = format(new Date(session.date), "MM/dd/yyyy");
                return (
                  <TableRow hover key={session.id} selected={isSelected}>
                    <TableCell padding="checkbox">
                      <Checkbox
                        checked={isSelected}
                        onChange={(event) => {
                          if (event.target.checked) {
                            onSelectOne?.(session.id);
                          } else {
                            onDeselectOne?.(session.id);
                          }
                        }}
                      />
                    </TableCell>
                    <TableCell id="speaker-name">
                      <Stack alignItems="center" direction="row" spacing={2}>
                        <Avatar src={session.speakerPicture}>
                          {getInitials(session.speakerName)}
                        </Avatar>
                        <Typography variant="subtitle2">{session.speakerName}</Typography>
                      </Stack>
                    </TableCell>
                    <TableCell id="title">{session.title}</TableCell>
                    <TableCell id="speaker-picture-url">{session.speakerPicture}</TableCell>
                    <TableCell id="category">{session.category}</TableCell>
                    <TableCell id="status">{session.status}</TableCell>
                    <TableCell id="time">{session.time}</TableCell>
                    <TableCell id="room">{session.room}</TableCell>
                    <TableCell id="floor">{session.floor}</TableCell>
                    <TableCell id="location">{session.location}</TableCell>
                    <TableCell id="date">{sessionDate}</TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </Box>
      </Scrollbar>
      <TablePagination
        component="div"
        count={count}
        onPageChange={onPageChange}
        onRowsPerPageChange={onRowsPerPageChange}
        page={page}
        rowsPerPage={rowsPerPage}
        rowsPerPageOptions={[25, 50, 100]}
      />
    </Card>
  );
};

SessionsTable.propTypes = {
  count: PropTypes.number,
  items: PropTypes.array,
  onDeselectAll: PropTypes.func,
  onDeselectOne: PropTypes.func,
  onPageChange: PropTypes.func,
  onRowsPerPageChange: PropTypes.func,
  onSelectAll: PropTypes.func,
  onSelectOne: PropTypes.func,
  page: PropTypes.number,
  rowsPerPage: PropTypes.number,
  selected: PropTypes.array,
};
