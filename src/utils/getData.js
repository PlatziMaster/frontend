import { useState, useEffect } from "react";

const useCv = (API) => {
    const [ cv, setCv] = useState([]);

useEffect(() => {
    fetch(API)
        .then(res => res.json())
        .then(data => {
          setCv(data);
        });
    },
    []
    );
    return cv;
};

export default useCv;