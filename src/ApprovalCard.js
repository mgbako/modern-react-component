const ApprovalCard = ({children}) => {
  return (
    <div className="ui card">
      <div className="content"> {children}</div>
      <div className="extra content">
       
        <div className="ui two content">
          <div className="ui basic green button">Approve</div>
          <div className="ui basic red button">Reject</div>
        </div>
      </div>
    </div>
  )
}

export default ApprovalCard;