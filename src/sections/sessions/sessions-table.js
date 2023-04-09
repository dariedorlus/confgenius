import PropTypes from "prop-types";
import { format } from "date-fns";
import { Avatar, Box, Card, Stack, Typography } from "@mui/material";
import { Scrollbar } from "src/components/scrollbar";
import { getInitials } from "src/utils/get-initials";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
  {
    field: "speakerName",
    headerName: "Speaker Name",
    width: 150,
    editable: true,
  },
  {
    field: "title",
    headerName: "Title",
    width: 300,
    editable: true,
  },
  {
    field: "speakerPicture",
    headerName: "Speaker Picture Link",
    width: 150,
    editable: true,
  },
  {
    field: "category",
    headerName: "Category",
    width: 150,
    editable: true,
  },
  {
    field: "status",
    headerName: "Status",
    width: 150,
    editable: true,
  },
  {
    field: "startTime",
    headerName: "Time",
    width: 200,
    editable: true,
    type: "date",
  },
  {
    field: "roomName",
    headerName: "Room",
    width: 150,
    editable: true,
  },
  {
    field: "floor",
    headerName: "Floor",
    width: 150,
    editable: true,
  },
  {
    field: "location",
    headerName: "Location",
    width: 150,
    editable: true,
  },
  {
    field: "date",
    headerName: "Date",
    width: 150,
    editable: true,
  },
];
export const SessionsTable = (props) => {
  const {
    count = 0,
    sessions = [],
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
  const selectedSome = selected.length > 0 && selected.length < sessions.length;
  const selectedAll = sessions.length > 0 && selected.length === sessions.length;
  return (
    <Card>
      <Scrollbar>
        <Box sx={{ height: 800, minWidth: 800 }}>
          <DataGrid
            rows={sessions}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: {
                  pageSize: 25,
                },
              },
            }}
            pageSizeOptions={[25, 50, 100]}
            checkboxSelection
            disableRowSelectionOnClick
          />
          {/* <Table>
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
                {sessions.map((session) => {
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
            </Table> */}
        </Box>
      </Scrollbar>
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
