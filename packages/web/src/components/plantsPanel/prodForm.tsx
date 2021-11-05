import React, { useEffect, useState } from 'react'

import { PowerPlant, Production } from '../../data/types/powerplant'
import TextInput from '../../templates/textInput/'
import { FormContainer, Grid } from './styled'

type Props = {
  date: Date
  plant: PowerPlant
  onChange: (diaryProduction) => void
}

const initialState: Production = {
  date: null,
  _id: null,
  production: {
    AC: 0,
    kW: 0,
    temperature: 0,
    time: 0,
    tension: 0
  }
}

function checkDate({ date, plant }: Props) {
  if (!plant || !date) return undefined

  return plant.diaryProduction.filter(
    (prod) => new Date(prod.date).toDateString() === date.toDateString()
  )[0]
}

function pushOnProductions(
  prods: PowerPlant['diaryProduction'] = [],
  form: Production
) {
  const i = prods.findIndex(
    (prod) =>
      new Date(prod.date).toDateString() === new Date(form.date).toDateString()
  )

  !form._id && delete form._id
  !form.date && delete form.date

  i === -1 ? prods.push(form) : (prods[i] = form)

  return prods
}

const ProdForm = (props: Props) => {
  const [form, setForm] = useState(initialState)
  const prod = checkDate(props)

  useEffect(
    () =>
      !form._id &&
      props.date &&
      setForm({ ...form, date: props.date.toISOString() }),
    [props.date]
  )

  useEffect(() => (prod ? setForm(prod) : setForm(initialState)), [prod])

  useEffect(
    () =>
      props.onChange(pushOnProductions(props?.plant?.diaryProduction, form)),
    [form]
  )

  return (
    <FormContainer>
      <h3>Produção</h3>
      <Grid>
        <TextInput
          type="number"
          label="AC"
          value={form.production.AC}
          onChange={(AC) =>
            setForm({
              ...form,
              production: { ...form.production, AC: Number(AC) }
            })
          }
        />
        <TextInput
          type="number"
          label="kW"
          value={form.production.kW}
          onChange={(kW) =>
            setForm({
              ...form,
              production: { ...form.production, kW: Number(kW) }
            })
          }
        />
        <TextInput
          type="number"
          label="Temp."
          value={form.production.temperature}
          onChange={(temp) =>
            setForm({
              ...form,
              production: { ...form.production, temperature: Number(temp) }
            })
          }
        />
        <TextInput
          type="number"
          label="Tensão"
          value={form.production.tension}
          onChange={(tens) =>
            setForm({
              ...form,
              production: { ...form.production, tension: Number(tens) }
            })
          }
        />
        <TextInput
          type="number"
          label="Tempo"
          value={form.production.time}
          onChange={(time) =>
            setForm({
              ...form,
              production: { ...form.production, time: Number(time) }
            })
          }
        />
      </Grid>
    </FormContainer>
  )
}

export default ProdForm
