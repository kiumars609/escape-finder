import React, { useState } from "react";

export default function Calendar() {
  const [currentDate, setCurrentDate] = useState(new Date());

  console.log(currentDate);
  

  return (
    <>
      <div className="calendar-card">
        <div className="section-head">
          <span className="section-kicker">Step 1</span>
          <h2>Select a date</h2>
        </div>

        <div className="calendar-topbar">
          <button className="calendar-nav-btn">&#10094;</button>
          <h3>March 2026</h3>
          <button className="calendar-nav-btn">&#10095;</button>
        </div>

        <div className="calendar-weekdays">
          <span>Sun</span>
          <span>Mon</span>
          <span>Tue</span>
          <span>Wed</span>
          <span>Thu</span>
          <span>Fri</span>
          <span>Sat</span>
        </div>

        <div className="calendar-grid">
          <div className="calendar-day disabled">
            <span>1</span>
            <small>NA</small>
          </div>
          <div className="calendar-day disabled">
            <span>2</span>
            <small>NA</small>
          </div>
          <div className="calendar-day disabled">
            <span>3</span>
            <small>NA</small>
          </div>
          <div className="calendar-day disabled">
            <span>4</span>
            <small>NA</small>
          </div>
          <div className="calendar-day disabled">
            <span>5</span>
            <small>NA</small>
          </div>
          <div className="calendar-day disabled">
            <span>6</span>
            <small>NA</small>
          </div>
          <div className="calendar-day disabled">
            <span>7</span>
            <small>NA</small>
          </div>

          <div className="calendar-day disabled">
            <span>8</span>
            <small>NA</small>
          </div>
          <div className="calendar-day disabled">
            <span>9</span>
            <small>NA</small>
          </div>
          <div className="calendar-day disabled">
            <span>10</span>
            <small>NA</small>
          </div>
          <div className="calendar-day disabled">
            <span>11</span>
            <small>NA</small>
          </div>
          <div className="calendar-day disabled">
            <span>12</span>
            <small>NA</small>
          </div>
          <div className="calendar-day disabled">
            <span>13</span>
            <small>NA</small>
          </div>
          <div className="calendar-day disabled">
            <span>14</span>
            <small>NA</small>
          </div>

          <div className="calendar-day disabled">
            <span>15</span>
            <small>NA</small>
          </div>
          <div className="calendar-day disabled">
            <span>16</span>
            <small>NA</small>
          </div>
          <div className="calendar-day disabled">
            <span>17</span>
            <small>NA</small>
          </div>
          <div className="calendar-day disabled">
            <span>18</span>
            <small>NA</small>
          </div>
          <div className="calendar-day disabled">
            <span>19</span>
            <small>NA</small>
          </div>
          <div className="calendar-day disabled">
            <span>20</span>
            <small>NA</small>
          </div>
          <div className="calendar-day disabled">
            <span>21</span>
            <small>NA</small>
          </div>

          <div className="calendar-day available">
            <span>22</span>
            <small>3 Available</small>
          </div>
          <div className="calendar-day available active">
            <span>23</span>
            <small>7 Available</small>
          </div>
          <div className="calendar-day available">
            <span>24</span>
            <small>7 Available</small>
          </div>
          <div className="calendar-day available">
            <span>25</span>
            <small>7 Available</small>
          </div>
          <div className="calendar-day available">
            <span>26</span>
            <small>7 Available</small>
          </div>
          <div className="calendar-day available">
            <span>27</span>
            <small>6 Available</small>
          </div>
          <div className="calendar-day available">
            <span>28</span>
            <small>8 Available</small>
          </div>

          <div className="calendar-day available">
            <span>29</span>
            <small>8 Available</small>
          </div>
          <div className="calendar-day available">
            <span>30</span>
            <small>7 Available</small>
          </div>
          <div className="calendar-day available">
            <span>31</span>
            <small>7 Available</small>
          </div>
        </div>
      </div>
    </>
  );
}
