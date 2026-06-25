import {
  Card,
  CardContent,
  Chip,
  Stack,
  Typography,
} from "@mui/material";
function formatDate(date) {
  return new Date(date).toLocaleString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });
}
export function NotificationCard({ notification }) {
  return (
    <Card
      elevation={3}
      sx={{
  borderLeft: `6px solid ${
    notification.Type === "Placement"
      ? "#2e7d32"
      : notification.Type === "Result"
      ? "#9c27b0"
      : "#1976d2"
  }`,
  borderRadius: 3,
  transition: "0.3s",
  "&:hover": {
    transform: "translateY(-4px)",
    boxShadow: 8,
  },
}}
    >
      <CardContent>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          sx={{ mb: 2 }}
        >
          <Chip
            label={notification.Type}
            color={
              notification.Type === "Placement"
                ? "success"
                : notification.Type === "Result"
                ? "secondary"
                : "primary"
            }
            size="small"
          />

          <Typography
            variant="caption"
            color="text.secondary"
          >
            {formatDate(notification.Timestamp)}
          </Typography>
        </Stack>

        <Typography
          variant="body1"
          fontWeight={600}
        >
          {notification.Message}
        </Typography>
      </CardContent>
    </Card>
  );
}