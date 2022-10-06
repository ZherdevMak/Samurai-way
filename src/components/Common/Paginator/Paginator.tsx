import React, {useState} from 'react';
import {useAppSelector} from "../hook";
import {v1} from "uuid";
import stl from "./Paginator.module.css";

type PaginatorPropsType = {
  onPageChanged: (el: number) => void
}


const Paginator = (props:PaginatorPropsType) => {
  const usersState = useAppSelector((state) => state.users)

  let pagesCount = Math.ceil(usersState.totalUsersCount / usersState.pageSize)
  let pagePeriod = pagesCount/10
  let [currentPagePeriod,setCurrentPagePeriod] = useState<number>(1)
  let previosPagePeriodCount = (currentPagePeriod - 1) * pagePeriod
  let nextPagePeriodCount = (currentPagePeriod) * pagePeriod
  let pages = [] as number[]
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i)
  }

  return(
    <div>
      <button></button>
      {pages
        .filter(p => p >= previosPagePeriodCount && p <= nextPagePeriodCount)
        .map(el => {

          return <span key={v1()} className={(usersState.currentPage === el) ? stl.selected : ''}
                       onClick={() => {
                         props.onPageChanged(el)
                       }}>{` ${el} `}</span>
        })
      }

    </div>
  );
};

export default Paginator;