import { HistoryContainer, HistoryList, Status } from './styles'

export function History() {
  return (
    <HistoryContainer>
      <h1>History</h1>

      <HistoryList>
        <table>
          <thead>
            <tr>
              <th>Task</th>
              <th>Duration</th>
              <th>Start</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Desenvolver o site</td>
              <td>10 minutos</td>
              <td>to 2 months</td>
              <td>
                <Status statusColor="green">Completed</Status>
              </td>
            </tr>
            <tr>
              <td>Desenvolver o site</td>
              <td>10 minutos</td>
              <td>to 2 months</td>
              <td>
                <Status statusColor="green">Completed</Status>
              </td>
            </tr>
            <tr>
              <td>Desenvolver o site</td>
              <td>10 minutos</td>
              <td>to 2 months</td>
              <td>
                <Status statusColor="red">Doing</Status>
              </td>
            </tr>
            <tr>
              <td>Desenvolver o site</td>
              <td>10 minutos</td>
              <td>to 2 months</td>
              <td>
                <Status statusColor="yellow">Stoped</Status>
              </td>
            </tr>
            <tr>
              <td>Desenvolver o site</td>
              <td>10 minutos</td>
              <td>to 2 months</td>
              <td>
                <Status statusColor="green">Completed</Status>
              </td>
            </tr>
            <tr>
              <td>Desenvolver o site</td>
              <td>10 minutos</td>
              <td>to 2 months</td>
              <td>
                <Status statusColor="green">Completed</Status>
              </td>
            </tr>
            <tr>
              <td>Desenvolver o site</td>
              <td>10 minutos</td>
              <td>to 2 months</td>
              <td>
                <Status statusColor="green">Completed</Status>
              </td>
            </tr>
          </tbody>
        </table>
      </HistoryList>
    </HistoryContainer>
  )
}
