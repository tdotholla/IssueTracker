import React, { useState } from "react";
import { Input, InputLabel, Button } from "@material-ui/core";
import { useForm } from 'react-hook-form'

export default function InputForm() {
  const { register, handleSubmit, watch, errors } = useForm()
  const onSubmit = data => { console.log(form) }

  const [form, setForm] = useState({
    date: new Date(),
    tagsTotal: null,
    tagsFixed: null
  })

  const updateFormvalues = (event) => {
    //validate
    // typeof event.target.value !== Number ? "error" : ""

    setForm({
      ...form,
      [event.target.name]: event.target.value
    })
    console.log('form', form)
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <InputLabel>Date</InputLabel>
      <Input defaultValue={new Date()} name="date" onChange={event => updateFormvalues(event)} ref={register}/>
      <InputLabel>Total</InputLabel>
      <Input defaultValue={form.total} name="tagsTotal" onChange={event => updateFormvalues(event)} ref={register({ required: true })}/>
      <InputLabel>Fixed</InputLabel>
      <Input defaultValue={form.fixed} name="tagsFixed" onChange={event => updateFormvalues(event)} ref={register({ required: true })}/>
      <Button type="submit">Submit</Button>
    </form>
  );
}
