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
          <div className="aviationTrainingCenter_lyrical_retreat_text1_number">
            01
          </div>
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
        <img
          className="aviationTrainingCenter_lyrical_retreat_airplane"
          src="/images/airplane.png"
          alt=""
        />
        <div className="aviationTrainingCenter_lyrical_retreat_text4">
          <span>*</span> До 2022 года обучение младшего и среднего
          <br />
          <div>
            персонала даже в коммерческих структурах
            <br /> аэропортов осуществлялось на бумаге.
          </div>
        </div>
      </div>
      <div className="aviationTrainingCenter_problems">
        <div className="aviationTrainingCenter_problems_text1">
          Проблемы
          <div className="aviationTrainingCenter_problems_text1_number">02</div>
        </div>
        <div className="aviationTrainingCenter_problems_text2">
          Необходимо было <span>разобраться</span> в том, что
          <br /> наворочено сейчас, <span>оптимизировать</span> технические
          <br /> процессы, <span>предложить</span> решения и
          <span>реализовать</span> их
          <br /> до промышленной эксплуатации. 
        </div>
        <div className="aviationTrainingCenter_problems_img">
          <img src="/images/problems.png" alt="" />
          <div className="aviationTrainingCenter_problems_img_block">
            <img src="/images/exclamationPoint.svg" alt="" />
            Низкая скорость загрузки
            <br /> некоторых страниц и<br /> блоков
          </div>
          <div className="aviationTrainingCenter_problems_img_block">
            <img src="/images/exclamationPoint.svg" alt="" />
            Отсутствие
            <br /> структурированных задач
            <br /> (поток сознания вместо этого) 
          </div>
          <div className="aviationTrainingCenter_problems_img_block">
            <img src="/images/exclamationPoint.svg" alt="" />
            Нет времени вести
            <br /> разработку своими
            <br /> силами
          </div>
          <div className="aviationTrainingCenter_problems_img_block">
            <img src="/images/exclamationPoint.svg" alt="" />
            Монолитная
            <br /> архитектура на бэке
          </div>
        </div>
        {max > 768 && (
          <div className="aviationTrainingCenter_problems_text3">
            <div>
              <span>*</span>Нас привлекли как усиление
            </div>
            <div>собственного ИТ-штата Заказчика.</div>
          </div>
        )}
      </div>
      <div className="aviationTrainingCenter_tasks">
        <div className="aviationTrainingCenter_tasks_text1">
          Задачи
          <div className="aviationTrainingCenter_tasks_text1_number">03</div>
        </div>
        <div className="aviationTrainingCenter_tasks_listContainer">
          <div className="aviationTrainingCenter_tasks_listContainer_content">
            <div className="aviationTrainingCenter_tasks_listContainer_content_item">
              <img src="/images/checkMarkBlue.svg" alt="" />
              <span>
                Структурировать и рассортировать
                {max <= 1024 && <br />}
                по
                {max > 1024 && <br />}
                задачам бизнес-требования
              </span>
            </div>
            <div className="aviationTrainingCenter_tasks_listContainer_content_item">
              <img src="/images/checkMarkYellow.svg" alt="" />
              <span>Изучить текущую архитектуру </span>
            </div>
            <div className="aviationTrainingCenter_tasks_listContainer_content_item">
              <img src="/images/checkMarkGreen.svg" alt="" />
              <span>
                Провести разработку,{max <= 768 && <br />} тестирование,
                {max > 768 && <br />} запуск продукта
              </span>
            </div>
          </div>
          <div className="aviationTrainingCenter_tasks_listContainer_img">
            <img src="/images/tasksImage.png" alt="" />
          </div>
        </div>
      </div>
      <div className="aviationTrainingCenter_development">
        <div className="aviationTrainingCenter_development_text1">
          Разработка
          <div className="aviationTrainingCenter_development_text1_number">
            04
          </div>
        </div>
        <div className="aviationTrainingCenter_development_text2">
          Авторизация и права{max <= 560 && <br />} доступа
        </div>
        <img
          className="aviationTrainingCenter_development_arrow1"
          src="/images/atcArrow.svg"
          alt=""
        />
        <div className="aviationTrainingCenter_development_atcProfile">
          <img src="/images/atcProfile.png" alt="" />
        </div>
        <div className="aviationTrainingCenter_development_atcForm">
          <img src="/images/atcForm.png" alt="" />
        </div>
        <div className="aviationTrainingCenter_development_miniAir">
          <img src="/images/atcMiniAir.svg" alt="" />
        </div>
        <div className="aviationTrainingCenter_development_text3">
          <p>
            Автоматизированная система
            <br />
            аналитики обучения сотрудников
          </p>
          <img
            className="aviationTrainingCenter_development_text3_arrow2"
            src="/images/atcArrowLeft.svg"
            alt=""
          />
          <div className="aviationTrainingCenter_development_text3_list1">
            <img src="/images/atcListCandidates.png" alt="" />
            <div className="aviationTrainingCenter_development_text3_list1_studyList">
              <img src="/images/atcListStudy.png" alt="" />
            </div>
            {max > 768 && (
              <img
                className="aviationTrainingCenter_development_text3_list1_arrow3"
                src="/images/atcArrowBot.svg"
                alt=""
              />
            )}
            <img
              className="aviationTrainingCenter_development_text3_list1_books"
              src="/images/books.svg"
              alt=""
            />
          </div>
        </div>
        <div className="aviationTrainingCenter_development_text4">
          <span>Процесс обучения</span>
          <div className="aviationTrainingCenter_development_text4_arrow1">
            {max > 560 ? (
              <img src="/images/proceesStudyArrow1.svg" alt="" />
            ) : (
              <img src="/images/proceesStudyArrow1390.svg" alt="" />
            )}
          </div>
          <div className="aviationTrainingCenter_development_text4_arrow2">
            {max > 560 ? (
              <img src="/images/proceesStudyArrow2.svg" alt="" />
            ) : (
              <img src="/images/proceesStudyArrow2390.svg" alt="" />
            )}
          </div>
          <div className="aviationTrainingCenter_development_text4_bag">
            <img src="/images/bag.svg" alt="" />
          </div>
          <div className="aviationTrainingCenter_development_text4_processStudies">
            <img src="/images/proceesStudies.png" alt="" />
          </div>
          <div className="aviationTrainingCenter_development_text4_workerStatus">
            <img src="/images/workerStatus.png" alt="" />
          </div>
          <div className="aviationTrainingCenter_development_text4_applicationTraining">
            <img src="/images/applicationTraining.png" alt="" />
            <div className="aviationTrainingCenter_development_text4_applicationTraining_form">
              <img src="/images/processForm.png" alt="" />
            </div>
            <div className="aviationTrainingCenter_development_text4_applicationTraining_arrow">
              <img src="/images/ArrowProcessForm.svg" alt="" />
            </div>
          </div>
        </div>
        <div className="aviationTrainingCenter_development_text5">
          <p>
            Архив обучения <br /> сотрудников
          </p>
          <div className="aviationTrainingCenter_development_text5_arrow">
            {max > 560 ? (
              <img src="/images/ArrowProcessForm.svg" alt="" />
            ) : (
              <img src="/images/archiveArrow390.svg" alt="" />
            )}
          </div>
          <div className="aviationTrainingCenter_development_text5_air">
            <img src="/images/blueAir.svg" alt="" />
          </div>
        </div>
        <div className="aviationTrainingCenter_development_integration">
          <div className="aviationTrainingCenter_development_integration_history">
            <img src="/images/atcHistory.png" alt="" />
          </div>
          <div className="aviationTrainingCenter_development_integration_text">
            Интеграция с системой
            <br /> тестирования сотрудников
            <div className="aviationTrainingCenter_development_integration_text_arrow">
              {max > 560 ? (
                <img src="/images/integrationArrow.svg" alt="" />
              ) : (
                <img src="/images/integrationArrow390.svg" alt="" />
              )}
            </div>
          </div>
        </div>
        <div className="aviationTrainingCenter_development_vacation">
          <div className="aviationTrainingCenter_development_vacation_text">
            Отпуска, увольнения,
            <br /> декреты, болезни
            {max > 560 && (
              <div className="aviationTrainingCenter_development_vacation_text_img">
                <img src="/images/vacationArrow.svg" alt="" />
              </div>
            )}
            <div className="aviationTrainingCenter_development_vacation_text_img2">
              <img src="/images/palma.svg" alt="" />
            </div>
          </div>
          <div className="aviationTrainingCenter_development_vacation_img">
            <img src="/images/editCourse.png" alt="" />
          </div>
          <div className="aviationTrainingCenter_development_vacation_img2">
            <img src="/images/vacations1.png" alt="" />
            <div className="aviationTrainingCenter_development_vacation_img2_second">
              <img src="/images/vacations2.png" alt="" />
              {max <= 560 && (
                <div className="aviationTrainingCenter_development_vacation_img2_second_arrow">
                  <img src="/images/vacationArrow390.svg" alt="" />
                </div>
              )}
            </div>
            <div className="aviationTrainingCenter_development_vacation_img2_third">
              <img src="/images/perenos.png" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="aviationTrainingCenter_results">
        <div className="aviationTrainingCenter_results_text1">
          Результаты
          <div className="aviationTrainingCenter_results_text1_number">05</div>
        </div>
        <div className="aviationTrainingCenter_results_content_human">
          <img src="/images/human.svg" alt="" />
        </div>
        <div className="aviationTrainingCenter_results_content">
          <div className="aviationTrainingCenter_results_content_item">
            Оптимизированы все запросы к <br /> бэку, ускорена загрузка данных,
            <br /> переработана бизнес-логика
          </div>
          <div className="aviationTrainingCenter_results_content_item">
            Разработан UI\UX интерфейсов
            <br /> проведения и прохождения
            <br /> обучения сотрудников
          </div>
          <div className="aviationTrainingCenter_results_content_item">
            Бэк был поделен на микросервисы, частично
            <br /> переписан, частично написан заново. Фронт
            <br /> при этом остался монолитным <br />
            (нецелесообразно с учетом затрат).
          </div>
        </div>
        <div className="aviationTrainingCenter_results_text2">
          Тестирование
          <div className="aviationTrainingCenter_results_text2_computer">
            <img src="/images/computer.svg" alt="" />
          </div>
          {max > 768 ? (
            <div className="aviationTrainingCenter_results_text2_arrow">
              <img src="/images/testingArrow.svg" alt="" />
            </div>
          ) : (
            <div className="aviationTrainingCenter_results_text2_arrow">
              <img src="/images/testingArrow768.svg" alt="" />
            </div>
          )}
        </div>
        <div className="aviationTrainingCenter_results_text3"> Собственными силами провели ручное и <br/>пользовательское тестирование. Автотесты<br/> заказчик выполнил своими силами. </div>
      </div>
    </div>
  );
};

export default aviationTrainingCenter;
