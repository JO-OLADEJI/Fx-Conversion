import React from 'react';
import styles from './Chart.module.css';
import { 
  getEurUsd,
  getGbpUsd,
  getUsdJpy,
  getUsdChf,
  getEurJpy,
  getEurGbp,
  getGbpJpy
} from '../utils/interact.js';

const Chart = (props) => {
  return (
    <div className={styles['chart']}>
      <button
        onClick={(e) => {
          e.preventDefault();
          getEurUsd();
        }}>
        EurUsd
      </button>
      <button
        onClick={(e) => {
          e.preventDefault();
          getGbpUsd();
        }}>
        GbpUsd
      </button>
      <button
        onClick={(e) => {
          e.preventDefault();
          getUsdJpy();
        }}>
        UsdJpy
      </button>
      <button
        onClick={(e) => {
          e.preventDefault();
          getUsdChf();
        }}>
        UsdChf
      </button>
      <button
        onClick={(e) => {
          e.preventDefault();
          getEurJpy();
        }}>
        EurJpy
      </button>
      <button
        onClick={(e) => {
          e.preventDefault();
          getEurGbp();
        }}>
        EurGbp
      </button>
      <button
        onClick={(e) => {
          e.preventDefault();
          getGbpJpy();
        }}>
        GbpJpy
      </button>
    </div>
  );
}
 
export default Chart;