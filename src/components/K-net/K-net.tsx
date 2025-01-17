import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const Knetpage = () => {
  return (
    <Box sx={{ p: 4 }}>
      <Card
        sx={{
          maxWidth: "4xl",
          margin: "auto",
          boxShadow: 2,
          borderRadius: 2,
        }}
      >
        <CardContent>
          <Typography
            variant="h4"
            component="h1"
            sx={{
              color: "#4068DF",
              fontWeight: "bold",
              mb: 2,
            }}
          >
            Welcome to K-net
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "text.secondary",
              fontSize: "1.125rem",
            }}
          >
            Welcome to the K-net .
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Knetpage;
