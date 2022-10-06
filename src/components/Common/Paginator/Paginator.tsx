import React, {useState} from 'react';
import {useAppSelector} from "../hook";
import {v1} from "uuid";
import stl from "./Paginator.module.css";

type PaginatorPropsType = {
  onPageChanged: (el: number) => void
  periodSize: number
}


const Paginator = (props:PaginatorPropsType) => {
  debugger
  const usersState = useAppSelector((state) => state.users)

  let pagesCount = Math.ceil(usersState.totalUsersCount / usersState.pageSize)
  let pagePeriod = Math.ceil(pagesCount/props.periodSize)
  let [currentPagePeriod,setCurrentPagePeriod] = useState<number>(1)
  let previosPagePeriodCount = (currentPagePeriod - 1) * props.periodSize
  let nextPagePeriodCount = (currentPagePeriod) * props.periodSize
  let pages = [] as number[]
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i)
  }

  return(
    <div>
      { currentPagePeriod > 1 &&
          <button onClick={() => setCurrentPagePeriod(currentPagePeriod - 1)}>Prev</button>}
      {pages
        .filter(p => p >= previosPagePeriodCount && p <= nextPagePeriodCount)
        .map(el => {

          return <span key={v1()} className={(usersState.currentPage === el) ? stl.selected : ''}
                       onClick={() => {
                         props.onPageChanged(el)
                       }}>{` ${el} `}</span>
        })
      }
      { pagePeriod > currentPagePeriod &&
          <button onClick={() => setCurrentPagePeriod(currentPagePeriod + 1)}>Next</button>}
    </div>
  );
};

export default Paginator;