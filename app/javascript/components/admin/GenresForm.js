import React, { useState, useEffect } from "react";
import VerticalNav from "../shared/VerticalNav";
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
  const [type, setType] = useState("");
  const theme = useTheme();
  const [movies, setMovies] = useState([]);
  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setMovies(typeof value === "string" ? value.split(",") : value);
  };

  useEffect(() => {
    if (props.genre) {
      setType(props.genre.type);
      setMovies(props.genre.movies_titles);
    }
    console.log(props);
  }, []);

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-2 my-1">
          {" "}
          <VerticalNav user={props.user} currentPage="genres" />
        </div>

        <div
          className="col-10 d-flex flex-column"
          style={{ borderLeft: "2px solid gray" }}
        >
          <div className="mt-4 container">
            <form
              action={
                props.genre
                  ? `/admin/genres/${props.genre.id}`
                  : `/admin/genres`
              }
              method="post"
            >
              {props.genre && (
                <input name="_method" type="hidden" value="put" />
              )}
              <input name="utf8" type="hidden" value="&#x2713;" />
              <input name="movie[titles]" type="hidden" value={movies} />
              <input
                name="authenticity_token"
                type="hidden"
                value={props.token}
              />
              {props.genre ? (
                <>
                  {props.success && (
                    <div class="alert alert-primary" role="alert">
                      The genre was successfully updated. You can still update it if there are changes in mind
                    </div>
                  )}
                  {props.success == false && (
                    <div class="alert alert-warning" role="alert">
                      The genre was not successfully updated. There must be some errors or problems
                    </div>
                  )}
                  <h2 className="fw-semibold"> Editing Genre </h2>
                  <span class="text-muted">
                    {" "}
                    Before editing genre, make sure the details are right. It is
                    important to have an accurate depiction and there is no
                    misrepresentation{" "}
                  </span>
                </>
              ) : (
                <>
                  <h2 className="fw-semibold"> Creating New Genre </h2>
                  <span class="text-muted">
                    {" "}
                    Before creating new genre, make sure the details are right.
                    It is important to have an accurate depiction and there is
                    no misrepresentation{" "}
                  </span>
                </>
              )}

              <div class="my-3">
                <label className="form-label fw-semibold"> Type </label>
                <input
                  type="text"
                  className="form-control"
                  name="genre[type]"
                  value={type}
                  onChange={(event) => setType(event.target.value)} 
                  required
                />
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
                    {props.movies.map((m) => (
                      <MenuItem
                        key={m.id}
                        value={m.title}
                        style={getStyles(m.title, movies, theme)}
                      >
                        {m.title}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </div>

              <button
                type="submit"
                class="btn btn-primary my-2 w-full form-control"
              >
                {props.genre ? "Update Genre" : "Add Genre"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoviesForm;
