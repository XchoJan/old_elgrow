import React, { useState, useEffect } from 'react';

import Header from '../Components/Header';

const aviationTrainingCenter = () => {
  const [max, setMax]: any = useState(0);

  useEffect(() => {
    setMax(window?.visualViewport?.width);
  }, []);
  return (
    <div className="aviationTrainingCenter">
      <Header />
      <div className="aviationTrainingCenter_main_title">
        Авиационный учебный <br /> центр
      </div>
      <div className="aviationTrainingCenter_main_info">
        <div className="aviationTrainingCenter_main_info_item">
          Клиент<span>UTG Group</span>
        </div>
        <div className="aviationTrainingCenter_main_info_item">
          Услуга<span>SRM</span>
        </div>
        <div className="aviationTrainingCenter_main_info_item">
          Год<span>2022</span>
        </div>
      </div>
      <div className="aviationTrainingCenter_main_logo">
        <img src="/images/atcHeader.png" alt="" />
      </div>
      <div className="aviationTrainingCenter_aboutProject">
        <div className="aviationTrainingCenter_aboutProject_text1">
          о проекте
        </div>
        <div className="aviationTrainingCenter_aboutProject_text2">
          <span>
            Разработка системы обучения {max <= 560 && <br />} сотрудников
          </span>
          {max > 560 && <br />}
          для крупнейшего в России {max <= 560 && <br />} оператора наземного
          {max > 560 && <br />}
          обслуживания {max <= 560 && <br />} воздушных судов - UTG Group
        </div>
        <div className="aviationTrainingCenter_aboutProject_text3">
          <span>
            Пример того, как мы умеем залазить в текущие {max <= 560 && <br />}
            процессы
            {max > 560 && <br />} Заказчика, ориентироваться на
            {max <= 560 && <br />} местности и запускать{max > 560 && <br />} в
            промышленную {max <= 560 && <br />} эксплуатацию.
          </span>
        </div>
      </div>
      <div className="aviationTrainingCenter_lyrical_retreat">
        <div className="aviationTrainingCenter_lyrical_retreat_text1">
          Лирическое отступление:
          <div className="aviationTrainingCenter_lyrical_retreat_text1_number" >01</div>
        </div>
        <div className="aviationTrainingCenter_lyrical_retreat_text2">
          {max >= 1024 && <br />}
          <span>Авиация</span> — эта такая интересная отрасль, в
          {max <= 560 && <br />} которой все крутится
          {max >= 1024 || max >= (1440 && <br />)} вокруг принципа
          <span>
            &nbsp;“Работает — {max <= 560 && <br />} не трогай, у нас тут
            самолеты
            {max >= 1024 || max >= (1440 && <br />)} садятся!”.
            {max <= 560 && <br />}
          </span>
          Нововведения здесь приветствуются примерно как
          {max >= 1024 || max >= (1440 && <br />)} {max <= 560 && <br />}громкая
          музыка на поминках, а попытки что-то
          {max >= 1024 && max < 1440 && <br />}
          {max <= 560 && <br />} автоматизировать сталкиваются с бюррократией, в
          {max <= 560 && <br />} сравнении с
          {max >= 1024 && max < 1440 && <br />} которой шутки про МФЦ кажутся
          {max <= 560 && <br />} вообще не смешными.
        </div>
        <div className="aviationTrainingCenter_lyrical_retreat_text3">
          Попытки автоматизации, безусловно, {max <= 560 && <br />}
          предпринимались и даже кое-где с переменным успехом (Шереметьево), но
          в общем-то техники, операторы багажа, инженеры по безопасности и
          {max <= 560 && <br />} вот они все получали свои корочки со словом
          {max <= 560 && <br />} “Авиация” с той же долей технических
          {max <= 768 && max > 560 && <br />} новшеств,{max <= 560 && <br />}
          что их деды и прадеды.
        </div>
        <img className="aviationTrainingCenter_lyrical_retreat_airplane" src="/images/airplane.png" />
        <div className="aviationTrainingCenter_lyrical_retreat_text4">
          <span>*</span> До 2022 года обучение младшего и среднего<div>  персонала
          даже в коммерческих структурах аэропортов осуществлялось на бумаге.</div>
        </div>
      </div>
      <div className='aviationTrainingCenter_problems'> 
      <div className="aviationTrainingCenter_problems_text1">
          Проблемы
          <div className="aviationTrainingCenter_problems_text1_number" >02</div>
        </div>
        </div>
    </div>
  );
};

export default aviationTrainingCenter;
