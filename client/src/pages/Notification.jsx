import * as React from 'react';

export const Notification = () => (
  <>
    <header>
      <div className="wrapper">
        <nav>
          <a href="/" className="nav-item active">
            Уведомления
          </a>
          <a href="/" className="nav-item">
            Подписки
          </a>
          <a href="/" className="nav-item">
            Поиск
          </a>
          <a href="/" className="nav-item">
            Карта
          </a>
          <a href="/" className="nav-item">
            Профиль
          </a>
        </nav>
      </div>
    </header>
    <div className="notification-page">
      <div className="wrapper">
        <aside className="select-type">
          <div className="type-item active">Площадки</div>
          <div className="type-item">Друзья</div>
          <div className="type-item">Другое</div>
        </aside>

        <div className="notification-list">
          <div className="notification">
            <div className="notification-content">
              <div className="notification-header">
                <h3 className="title">*author*</h3>
                <div className="time">3 минуты назад</div>
              </div>
              <div className="notification-body">Площадка зыкрыта на ремонт</div>
            </div>
            <div className="notification-icons">
              <div className="trash-icon" />
            </div>
          </div>
          <div className="notification">
            <div className="notification-content">
              <div className="notification-header">
                <h3 className="title">*author*</h3>
                <div className="time">10 минут назад</div>
              </div>
              <div className="notification-body">Заменили покрытие</div>
            </div>
            <div className="notification-icons">
              <div className="trash-icon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
);
