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
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [img, setImg] = useState(null);
  const theme = useTheme();

  const [movies, setMovies] = useState([]);
  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setMovies(
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
    setImg(props.member.picture_url);
  };

  useEffect(() => {
    if (props.member) {
      setFirstName(props.member.first_name);
      setLastName(props.member.last_name);
      if (props.member.birthday) setValue(new Date(props.member.birthday));
      setImg(props.member.picture_url);
      setMovies(props.member.movies_title);
    }
  }, []);

  console.log(props.movies);
  console.log(movies);
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-2 my-1">
          {" "}
          <VerticalNav
            user={props.user}
            currentPage="members"
            token={props.token}
          />
        </div>

        <div
          className="col-10 d-flex flex-column"
          style={{ borderLeft: "2px solid gray" }}
        >
          <div className="mt-4 container">
            <form
              action={
                props.member
                  ? `/admin/members/${props.member.id}`
                  : `/admin/members`
              }
              enctype="multipart/form-data"
              method="post"
            >
              {props.member && (
                <input name="_method" type="hidden" value="put" />
              )}
              <input name="utf8" type="hidden" value="&#x2713;" />
              <input name="movie[titles]" type="hidden" value={movies} />
              <input name="member[birthday]" type="hidden" value={value} />
              <input
                name="authenticity_token"
                type="hidden"
                value={props.token}
              />

              {props.success && (
                <div class="alert alert-primary" role="alert">
                  The cast/crew was successfully{" "}
                  {props.member ? "updated" : "created"}
                </div>
              )}
              {props.success == false && (
                <div class="alert alert-warning" role="alert">
                  The cast/crew was not successfully{" "}
                  {props.member ? "updated" : "created"}
                </div>
              )}
              {props.member ? (
                <>
                  <h2 className="fw-semibold"> Editing Cast/Crew </h2>
                  <span class="text-muted">
                    {" "}
                    Before editing a cast/crew, make sure the details are right.
                    It is important to have an accurate depiction and there is
                    no misrepresentation{" "}
                  </span>
                </>
              ) : (
                <>
                  <h2 className="fw-semibold"> Creating New Cast/Crew </h2>
                  <span class="text-muted">
                    {" "}
                    Before creating a cast/crew, make sure the details are
                    right. It is important to have an accurate depiction and
                    there is no misrepresentation{" "}
                  </span>
                </>
              )}

              <div class="my-3">
                <label className="form-label fw-semibold"> First Name </label>
                <input
                  type="text"
                  className="form-control"
                  name="member[first_name]"
                  value={firstName}
                  onChange={(event) => setFirstName(event.target.value)}
                  required
                />

                {props.errors && props.errors.first_name && (
                  <div class="mt-2 text-danger">
                    First Name {props.errors.first_name[0]}
                  </div>
                )}
              </div>

              <div class="my-3">
                <label className="form-label fw-semibold"> Last Name </label>
                <input
                  type="text"
                  className="form-control"
                  name="member[last_name]"
                  value={lastName}
                  onChange={(event) => setLastName(event.target.value)}
                  required
                />

                {props.errors && props.errors.last_name && (
                  <div class="mt-2 text-danger">
                    Last Name {props.errors.last_name[0]}
                  </div>
                )}
              </div>

                  <div class="my-3">
                    <label className="form-label"> Gender </label>
                    <select className="form-select" name="member[gender]">
                      {props.genders.map((m) => (
                        <option
                          value={m.value}
                          key={m.value}
                          selected={
                            props.u ? props.member.gender_name && props.member.gender_name == m.name : false
                          }
                        >
                          {m.name}
                        </option>
                      ))}
                    </select>
                  </div>
              <div class={`my-3`}>
                <label for="formFile" class="form-label fw-semibold">
                  Picture
                </label>
                <input
                  class="form-control"
                  type="file"
                  id="formFile"
                  name="member[picture]"
                  onChange={handleFile}
                />

                {props.errors && props.errors.picture && (
                  <div class="mt-2 text-danger">
                    Picture {props.errors.picture[0]}
                  </div>
                )}
              </div>
              <div className={`${props.member ? "" : "d-none"}`}>
                <img src={img} className="img-fluid" />
                <button
                  className={`btn btn-danger w-full form-control mt-3 ${
                    props.member ? "" : "d-none"
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
                  Overview
                </label>
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="6"
                  name="member[overview]"
                  placeholder="Write the summary of the movie here"
                  required
                >
                  {props.member ? props.member.overview : null}
                </textarea>
                {props.errors && props.errors.overview && (
                  <div class="mt-2 text-danger">
                    Overview {props.errors.overview[0]}
                  </div>
                )}
              </div>
              <div class="my-3 ">
                <FormControl sx={{ width: "100%" }}>
                  <label
                    for="exampleFormControlTextarea1"
                    class="form-label fw-semibold"
                  >
                    Movies
                  </label>
                  <Select
                    labelId="demo-multiple-chip-label"
                    id="demo-multiple-chip"
                    multiple
                    value={movies}
                    onChange={handleChange}
                    autoWidth
                    input={
                      <OutlinedInput id="select-multiple-chip" label="Movies" />
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
                    {props.movies.map((g) => (
                      <MenuItem
                        key={g.id}
                        value={g.title}
                        style={getStyles(g.title, movies, theme)}
                      >
                        {g.title}
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
                    Birthday
                  </label>
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DatePicker
                      label="Date of Birth"
                      value={value}
                      onChange={(newValue) => {
                        setValue(newValue);
                        handleDate(newValue);
                      }}
                      renderInput={(params) => <TextField {...params} />}
                    />
                  </LocalizationProvider>
                </FormControl>
                {props.errors && props.errors.birthday && (
                  <div class="mt-2 text-danger">
                    Birthday {props.errors.birthday[0]}
                  </div>
                )}
              </div>

              <button
                type="submit"
                class="btn btn-primary my-2 w-full form-control"
              >
                {props.member ? "Update Cast/Crew" : "Add Cast/Crew"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoviesForm;
