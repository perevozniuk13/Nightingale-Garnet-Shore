import React, { useEffect, useState } from "react";
import SingleApplication from "../singleApplication/SingleApplication";
import styles from "./Applications.module.css";
import { fetchApplications } from "../../services/api";
import { Application } from "../../types/applicationTypes";
import { Button } from "../../ui/Button/Button";

const Applications = () => {
  const [applications, setApplications] = useState<Application[]|null>(null);

  const limit = 5;
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchApplications(page, limit);
        
        setApplications(data);
      } catch (e) {
        console.log(e);
      }
    };

    fetchData();
  }, [page]);

  if (!applications) {
    return <>Loading...</>
  }

  return (
    <div className={styles.Applications}>
      {applications.length > 0 ? 
      applications.map((application) => {
        return <SingleApplication key={application.date_created} application={application}/>
      })
    :
    <div>No more applications available</div>
    }
      <Button className='load-more-button' onClick={() => setPage(page+1)} disabled={applications.length < 5}>Load More</Button>
    </div>
  );
};

export default Applications;
