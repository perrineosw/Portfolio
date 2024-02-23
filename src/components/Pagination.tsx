import React from "react";
import { Grid, Pagination, Typography } from "@mui/material";

interface PaginationProps {
  currentPage: number;
  handlePageChange: (
    event: React.ChangeEvent<unknown>,
    newPage: number
  ) => void;
  totalPageCount: number;
  indexOfFirstBlog: number;
  indexOfLastBlog: number;
  total: number;
}

const MyPagination: React.FC<PaginationProps> = ({
  currentPage,
  handlePageChange,
  totalPageCount,
  indexOfFirstBlog,
  indexOfLastBlog,
  total,
}) => {
  return (
    <Grid
      container
      spacing={2}
      sx={{ width: "100%", marginTop: "20px", marginBottom: "10px" }}
    >
      <Grid item lg={6} md={12}>
        <Typography variant="body2">
          Affichage de l&apos;élément {indexOfFirstBlog} à {indexOfLastBlog} sur{" "}
          {total} éléments
        </Typography>
      </Grid>
      <Grid
        item
        lg={6}
        md={12}
        style={{ width: "100%", display: "flex", justifyContent: "flex-end" }}
      >
        <Pagination
          count={totalPageCount}
          page={currentPage}
          onChange={handlePageChange}
        />
      </Grid>
    </Grid>
  );
};

export default MyPagination;
