
import React from "react"
import s from './CategoryList.module.css'

import {  useSelector } from 'react-redux';

import sprite from '../../../images/svg/icon.svg';
import {transactionSelectors} from '../../../redux/transaction'

// import trans from '../CategoryData/categoriesIncome.json'

const CategoryIncome = ({year, month}) => {
   const income = useSelector(transactionSelectors.getAllSpendPerMonth({year, month}))

    return (
      <ul className={s.categoryList}>
      {income.length === 0 ? (
        <li className={s.noData}>За данный период транзакций нет</li>
      ) : (
        income.map(item => (
          <li
            key={item.id}
            className={s.categoryItem}
            
          >
            <p className={s.costs}>{item.costs}</p>

            <svg className={s.icon}>
              <use
                className={s.useSvg}
                xlinkHref={`${sprite}#${item.category}`}
              />
            </svg>

            <h3 className={s.price}>{item.category}</h3>
          </li>
        ))
      )}
    </ul>
    )

}

export default CategoryIncome