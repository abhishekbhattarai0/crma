import SessionWithDistinctUserTable from "../../components/table/session-with-distinct-user-table"

const LoginHistory = () => {
  return (
    <div className="p-4">
      {/**Shows all the user who have sessions history  */}
      <SessionWithDistinctUserTable />
    </div>
  )
}

export default LoginHistory