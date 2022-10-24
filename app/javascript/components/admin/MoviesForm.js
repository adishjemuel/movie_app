import React, { useState, useEffect } from "react";
import VerticalNav from "../shared/VerticalNav";
import TextField from "@mui/material/TextField";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";

import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Chip from "@mui/material/Chip";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};
function getStyles(type, genres, theme) {
  return {
    fontWeight:
      genres.indexOf(type) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

const MoviesForm = (props) => {
  const [value, setValue] = useState(null);
  const [title, setTitle] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [img, setImg] = useState(null);
  const theme = useTheme();

  const [genres, setGenres] = useState([]);
  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setGenres(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  const handleFile = (event) => {
    setImg(URL.createObjectURL(event.target.files[0]));
    setSelectedFile(event.target.files[0]);
    console.log(event.target.files[0]);
  };
  const handleDate = (newValue) => {
    console.log(newValue);
  };

  const handleReset = () => {
    setImg(props.movie.cover_url);
  };

  useEffect(() => {
    if (props.movie) {
      setTitle(props.movie.title);
      setValue(new Date(props.movie.release));
      setImg(props.movie.cover_url);
      setGenres(props.movie.genres_type);
    }
  }, []);

  console.log(genres);
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-2 my-1">
          {" "}
          <VerticalNav user={props.user} currentPage="movies" />
        </div>

        <div
          className="col-10 d-flex flex-column"
          style={{ borderLeft: "2px solid gray" }}
        >
          <div className="mt-4 container">
            <form
              action={
                props.movie
                  ? `/admin/movies/${props.movie.id}`
                  : `/admin/movies`
              }
              enctype="multipart/form-data"
              method="post"
            >
              {props.movie && (
                <input name="_method" type="hidden" value="put" />
              )}
              <input name="utf8" type="hidden" value="&#x2713;" />
              <input
                name="authenticity_token"
                type="hidden"
                value={props.token}
              />
              {/* <h5 className="fw-semibold"> Review on {props.movie.title}</h5> */}
              {props.movie ? (
                <>
                  <h2 className="fw-semibold"> Editing Movie </h2>
                  <span class="text-muted">
                    {" "}
                    Before editing movie, make sure the details are right. It is
                    important to have an accurate depiction and there is no
                    misrepresentation{" "}
                  </span>
                </>
              ) : (
                <>
                  <h2 className="fw-semibold"> Creating New Movie </h2>
                  <span class="text-muted">
                    {" "}
                    Before creating a movie, make sure the details are right. It
                    is important to have an accurate depiction and there is no
                    misrepresentation{" "}
                  </span>
                </>
              )}

              <div class="my-3">
                <label className="form-label fw-semibold"> Title </label>
                <input
                  type="text"
                  className="form-control"
                  name="movie[title]"
                  value={title}
                  onChange={(event) => setTitle(event.target.value)}
                />
              </div>

              <div class={`my-3`}>
                <label for="formFile" class="form-label fw-semibold">
                  Select A Cover Photo For The Movie
                </label>
                <input
                  class="form-control"
                  type="file"
                  id="formFile"
                  name="user[avatar]"
                  onChange={handleFile}
                />
              </div>
              <div className={`${props.movie ? "" : "d-none"}`}>
                <img src={img} className="img-fluid" />
                <button
                  className={`btn btn-danger w-full form-control mt-3 ${
                    props.movie ? "" : "d-none"
                  }`}
                  type="button"
                  onClick={handleReset}
                >
                  Reset
                </button>
              </div>

              <div class="my-3">
                <label
                  for="exampleFormControlTextarea1"
                  class="form-label fw-semibold"
                >
                  Summary
                </label>
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="6"
                  name="review[body]"
                  placeholder="Write your review here"
                >
                  {props.movie ? props.movie.summary : null}
                </textarea>
              </div>
              <div class="my-3 ">
                <FormControl sx={{ width: "100%" }}>
                  <label
                    for="exampleFormControlTextarea1"
                    class="form-label fw-semibold"
                  >
                    Genre(s)
                  </label>
                  <Select
                    labelId="demo-multiple-chip-label"
                    id="demo-multiple-chip"
                    multiple
                    value={genres}
                    onChange={handleChange}
                    className={"ms-n1"}
                    autoWidth
                    input={
                      <OutlinedInput
                        id="select-multiple-chip"
                        label="Genre(s)"
                      />
                    }
                    renderValue={(selected) => (
                      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                        {selected.map((value) => (
                          <Chip key={value} label={value} />
                        ))}
                      </Box>
                    )}
                    MenuProps={MenuProps}
                  >
                    {props.genres.map((g) => (
                      <MenuItem
                        key={g.id}
                        value={g.type}
                        style={getStyles(g.type, genres, theme)}
                      >
                        {g.type}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </div>

              <div class="my-3">
                <FormControl sx={{ width: "100%" }}>
                  <label
                    for="exampleFormControlTextarea1"
                    class="form-label fw-semibold mb-4"
                  >
                    Release
                  </label>
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DatePicker
                      label="Date of Release"
                      value={value}
                      onChange={(newValue) => {
                        setValue(newValue);
                        handleDate(newValue);
                      }}
                      renderInput={(params) => <TextField {...params} />}
                    />
                  </LocalizationProvider>
                </FormControl>
              </div>

              <button
                type="submit"
                class="btn btn-primary my-2 w-full form-control"
              >
                {props.movie ? "Update Movie" : "Add Movie"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoviesForm;
