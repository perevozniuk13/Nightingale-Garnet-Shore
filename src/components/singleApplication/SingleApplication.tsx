import React from "react";
import styles from "./SingleApplication.module.css";

const SingleApplication = ({ application }) => {
  const formatDate = (date : string) => {
    return new Date(date).toLocaleDateString('en-GB', {
      year: '2-digit',
      month: '2-digit',
      day: '2-digit',
    }).replace(/\//g, '-');
  }

  return (
    <div className={styles.SingleApplication}>
      <div className={styles.cell}>
        <sub>Company</sub>
        {application.company}
      </div>
      <div className={styles.cell}>
        <sub>Name</sub>
        {application.first_name} {application.last_name}
      </div>
      <div className={`${styles.cell} ${styles.email}`}>
        <sub>Email</sub>
        {application.email}
      </div>
      <div className={styles.cell}>
        <sub>Loan Amount</sub>
        {`£${application.loan_amount.toLocaleString()}`}
      </div>
      <div className={styles.cell}>
        <sub>Application Date</sub>
        {formatDate(application.date_created)}
      </div>
      <div className={styles.cell}>
        <sub>Expiry date</sub>
        {formatDate(application.expiry_date)}
      </div>
    </div>
  );
};

export default SingleApplication;
