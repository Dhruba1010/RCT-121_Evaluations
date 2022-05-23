import React, { useEffect, useState } from "react";
import Button from "./components/Button";
import CandidateCard from "./components/CandidateCard";
import axios from 'axios';
import "./styles.css";

export default function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [salarySort, setSalarySort] = useState("asc");

  const getData = ({page, salarySort}) => {
    setLoading(true);
    axios("https://json-server-mocker-masai.herokuapp.com/candidates", {
      method: 'GET',
      params: {
        _page: page,
        _limit : 5,
        _sort: "salary",
        _order: salarySort
      }
    })
    .then(res => {
      setData(res.data);
      setLoading(false);
      console.log(res);
    })
    .catch(err => {
      setError(true);
      setLoading(false);
      console.log(err);
    })
  }

  useEffect(() => {
    getData({page, salarySort});

  },[page, salarySort]);

  const handlePage = (v) => {
    setPage(page+v);
  }

  const handleSort = () => {
    if(salarySort === "asc"){
      setSalarySort("desc");
    } else {
      setSalarySort("asc");
    }
  }

  return (
    <div className="App">
      <div>
        {error && <div>Something went wrong!</div>}
        {loading && <div id="loading-container">...Loading</div>}
        {salarySort==="asc" ? (<Button onClick={() => handleSort()} id="SORT_BUTTON" title={`Sort by Descending Salary`} />) :
          (<Button onClick={() => handleSort()} id="SORT_BUTTON" title={`Sort by Ascending Salary`} />)        
        }
        <Button disabled={page===1} onClick={()=>handlePage(-1)} title="PREV" id="PREV" />
        <Button onClick={()=>handlePage(+1)} id="NEXT" title="NEXT" />
      </div>
      {data.map((item) => 
        <CandidateCard key={item.id} {...item} />
      )}
    </div>
  );
}