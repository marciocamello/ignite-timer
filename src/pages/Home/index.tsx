import { Play } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'

import {
  CountdownContainer,
  FormContainer,
  HomeContainer,
  MinutesAmountInput,
  Separator,
  StartCountdownButton,
  TaskInput,
} from './styles'

interface FormData {
  task: string
  minutesAmount: number
}

const newTaskFormValidationSchema = zod.object({
  task: zod.string().min(1, 'Task must have at least 1 character'),
  minutesAmount: zod
    .number()
    .min(5, 'Minutes amount must be at least 5')
    .max(60, 'Minutes amount must be at most 60'),
})

export function Home() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(newTaskFormValidationSchema),
  })

  function handleCreateNewTask(data: any) {
    console.log(data)
  }

  const task = watch('task')
  const isSubmitDisabled = !task

  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(handleCreateNewTask)}>
        <FormContainer>
          <label htmlFor="task">I going to work on</label>
          <TaskInput
            id="task"
            placeholder="Give a name to your project"
            list="task-suggestions"
            {...register('task')}
          />

          <datalist id="task-suggestions">
            <option value="Desenvolver o site" />
            <option value="Desenvolver o app" />
            <option value="Desenvolver o game" />
          </datalist>

          <label htmlFor="minutesAmount">during</label>
          <MinutesAmountInput
            type="number"
            id="minutesAmount"
            placeholder="00"
            step={5}
            min={5}
            {...register('minutesAmount', {
              valueAsNumber: true,
            })}
          />

          <span>minutes.</span>
        </FormContainer>

        <CountdownContainer>
          <span>0</span>
          <span>0</span>
          <Separator>:</Separator>
          <span>0</span>
          <span>0</span>
        </CountdownContainer>

        <StartCountdownButton type="submit" disabled={isSubmitDisabled}>
          <Play size={24} />
          Start
        </StartCountdownButton>
      </form>
    </HomeContainer>
  )
}
