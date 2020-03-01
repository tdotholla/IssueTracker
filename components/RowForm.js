import React, { useState } from "react";
import {
  Input,
  Button,
  Grid,
  GridList,
  GridListTile
} from "@material-ui/core";
import { useForm } from "react-hook-form";
import { postData } from "../db/mlab";

export default function InputForm() {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = data => {
    postData(form).then(item => {
      console.log(item); // JSON data parsed by `response.json()` call
    });
  };

  const [form, setForm] = useState({
    date: new Date(),
    tagsTotal: 0,
    tagsFixed: 0,
    get tagsRemaining() {
      return this.tagsTotal - this.tagsFixed;
    }
  });

  const updateFormvalues = event => {
    //validate
    // typeof event.target.value !== Number ? "error" : ""

    setForm({
      ...form,
      [event.target.name]: event.target.value
    });
    console.log("form", form);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <GridList container cols={4}>
        <GridListTile>
          <Input
            defaultValue={new Date()}
            name="date"
            onChange={event => updateFormvalues(event)}
            ref={register}
          />
        </GridListTile>
        <GridListTile>
          <Input
            defaultValue={form.tagsTotal}
            name="tagsTotal"
            onChange={event => updateFormvalues(event)}
            ref={register({ required: true })}
          />
        </GridListTile>
        <GridListTile>
          <Input
            defaultValue={form.tagsFixed}
            name="tagsFixed"
            onChange={event => updateFormvalues(event)}
            ref={register({ required: true })}
          />
        </GridListTile>
        <GridListTile>
          <Button type="submit" variant="outlined" size="small">
            Submit
          </Button>
        </GridListTile>
      </GridList>
    </form>
  );
}
