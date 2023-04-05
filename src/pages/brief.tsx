import React, { Dispatch, SetStateAction, useState, useEffect } from 'react';
import Header from '../Components/Header';
import Input from '../Components/Input';

const brief = () => {
  const [max, setMax]: any = useState(0);
  useEffect(() => {
    setMax(window?.visualViewport?.width);
  }, []);

  return (
    <div className="briefContainer">
      <div
        style={{
          zIndex: '10',
          background: 'white',
          top: '0',
          width: '100vw',
          position: 'fixed',
        }}
      >
        <Header />
      </div>
      <div className="briefContent">
        <div className="mainTitle">Бриф</div>
        <div className="blockName"> Обработка запроса </div>
        <div className="blockDescr">
          <span>оперативно</span>
          <div className="descrText">
            pазберемся в проблеме и сориентируем по бюджетам и срокам, ее{' '}
            {max > 560 && <br />}
            срочность. Расскажем о вилках по типам работ. Если не{' '}
            {max > 560 && <br />}
            вписываемся в бюджет или сроки, сразу это подсветим.
          </div>
        </div>
        <div className="block">
          <Input
            textarea={false}
            labelHeight={'100px'}
            left={'0px'}
            placeholder={
              <div className="inputText">
                <span className="paragraph">1.</span>
                <span className="contentText">
                  Как называется ваша компания?
                </span>
              </div>
            }
          />
          <Input
            textarea={true}
            labelHeight={'170px'}
            left={'0px'}
            marginTop={'0px'}
            marginTopLabel={'62px'}
            placeholder={
              <div className="inputText">
                <span className="paragraph">2.</span>
                <span className="contentText">Расскажите кратко о задаче</span>
              </div>
            }
          />

          <Input
            textarea={false}
            labelHeight={'100px'}
            left={'0px'}
            marginTopLabel={'62px'}
            placeholder={
              <div className="inputText">
                <span className="paragraph">3.</span>
                <span className="contentText">
                  Постоянные ли это работы или единичный проект?
                </span>
              </div>
            }
          />
          <div className="checkboxesWrapper">
            <div className="inputText">
              <span className="paragraph">4.</span>
              <span className="contentText">Какова срочность задачи?</span>
            </div>
            <div className="checkboxes">
              <span>Выберите:</span>
              <label className="checkbox-label">
                <input type="checkbox" className="checkbox" />
                нужно уже вчера
              </label>
              <label className="checkbox-label">
                <input type="checkbox" className="checkbox" />
                есть четкий дедлайн
              </label>
              <label className="checkbox-label">
                <input type="checkbox" className="checkbox" />
                несрочная задача
              </label>
            </div>
          </div>

          <Input
            textarea={false}
            labelHeight={'100px'}
            left={'0px'}
            marginTopLabel={'32px'}
            placeholder={
              <div className="inputText">
                <span className="paragraph">5.</span>
                <span className="contentText">
                  Каковы ограничения по бюджету?
                </span>
              </div>
            }
          />
          <Input
            textarea={true}
            labelHeight={'200px'}
            left={'0px'}
            marginTop={'0px'}
            marginTopLabel={'69px'}
            placeholder={
              <div className="inputText">
                <span className="paragraph">6.</span>
                <span className="contentText">
                  Кто будет участвовать в проекте на вашей стороне? Кто в этом
                  проекте является
                  <br /> ключевым лицом, принимающим решение?
                </span>
              </div>
            }
          />
          <Input
            textarea={false}
            labelHeight={'120px'}
            left={'0px'}
            marginTopLabel={'62px'}
            placeholder={
              <div className="inputText">
                <span className="paragraph">7.</span>
                <span className="contentText">
                  Есть ли в компании ИТ-подразделение? Маркетинг-подразделение?
                  <br /> Дизайн-подразделение?
                </span>
              </div>
            }
          />
          <Input
            textarea={false}
            labelHeight={max > 560 ? '120px' : '160px'}
            left={'0px'}
            marginTopLabel={'62px'}
            placeholder={
              <div className="inputText">
                <span className="paragraph">8.</span>
                <span className="contentText">
                  Существует ли какая-то значимая документация (персоны, user
                  flow
                  <br /> или другие), которую нам следует изучить перед
                  звонком? 
                </span>
              </div>
            }
          />
          <Input
            textarea={false}
            labelHeight={'120px'}
            left={'0px'}
            marginTopLabel={'62px'}
            placeholder={
              <div className="inputText">
                <span className="paragraph">9.</span>
                <span className="contentText">
                  Есть ли NDA, который нужно подписать до созвона?
                </span>
              </div>
            }
          />
          <Input
            textarea={false}
            labelHeight={'120px'}
            left={'0px'}
            marginTopLabel={'62px'}
            placeholder={
              <div className="inputText">
                <span className="paragraph">10.</span>
                <span className="contentText">
                  Расскажите кратко, что вы знаете об Elgrow и как нас нашли?
                </span>
              </div>
            }
          />
        </div>
        <div id="block2" className="block">
          <div className="blockName"> Знакомство </div>
          <div id="second" className="blockDescr">
            <span>в срок</span>
            <div className="descrText">
              конкретизируем задачу, соберем бизнес-требования в<br /> первичный
              технический документ, покажем кейсы
            </div>
          </div>
          <Input
            textarea={false}
            labelHeight={'100px'}
            left={'0px'}
            placeholder={
              <div className="inputText">
                <span className="paragraph">1.</span>
                <span className="contentText">
                  Как вы работаете? На чем зарабатываете?
                </span>
              </div>
            }
          />
          <Input
            textarea={false}
            labelHeight={'100px'}
            left={'0px'}
            marginTopLabel={'73px'}
            placeholder={
              <div className="inputText">
                <span className="paragraph">2.</span>
                <span className="contentText">
                  Как устроен ваш продукт? Благодаря чему он развивается?
                </span>
              </div>
            }
          />

          <Input
            textarea={false}
            labelHeight={'100px'}
            left={'0px'}
            marginTopLabel={'73px'}
            placeholder={
              <div className="inputText">
                <span className="paragraph">3.</span>
                <span className="contentText">
                  Какая ближайшая задача сейчас стоит перед продуктом ?
                </span>
              </div>
            }
          />
          <Input
            textarea={false}
            labelHeight={max > 560 ? '120px' : '140px'}
            left={'0px'}
            marginTop={'0px'}
            marginTopLabel={'73px'}
            placeholder={
              <div className="inputText">
                <span className="paragraph">4.</span>
                <span className="contentText">
                  Откуда появилась потребность в сайте / приложении / внутренне{' '}
                  <br /> системе / другом…
                </span>
              </div>
            }
          />

          <Input
            textarea={false}
            labelHeight={max > 560 ? '120px' : '160px'}
            marginTopLabel={'73px'}
            left={'0px'}
            placeholder={
              <div className="inputText">
                <span className="paragraph">5.</span>
                <span className="contentText">
                  Какую цель для бизнеса преследуем? Например: привлечение
                  клиентов, регистрации, удержание,
                  <br /> прибыль, рекомендации и так далее 
                </span>
              </div>
            }
          />
          <Input
            textarea={false}
            labelHeight={'100px'}
            left={'0px'}
            marginTopLabel={'73px'}
            placeholder={
              <div className="inputText">
                <span className="paragraph">6.</span>
                <span className="contentText">
                  Какие ключевые метрики (KPI)? 
                </span>
              </div>
            }
          />
          <Input
            textarea={false}
            labelHeight={max > 560 ? '100px' : '130px'}
            marginTopLabel={'73px'}
            left={'0px'}
            placeholder={
              <div className="inputText">
                <span className="paragraph">7.</span>
                <span className="contentText">
                  Есть ли какие-то ограничения (технологические, связанные с
                  бизнесом и т.п.)? 
                </span>
              </div>
            }
          />

          <Input
            textarea={false}
            labelHeight={max > 560 ? '120px' : '160px'}
            marginTopLabel={'73px'}
            left={'0px'}
            placeholder={
              <div className="inputText">
                <span className="paragraph">8.</span>
                <span className="contentText">
                  Есть ли какие-то продукты, на которые можно ориентироваться?
                  (у конкурентов, из других сфер или другие ваши продукты) 
                </span>
              </div>
            }
          />
        </div>
        <div id="block2" className="block">
          <div className="blockName"> Брифинг </div>
          <div id="second" className="blockDescr">
            <span>быстро</span>
            <div className="descrText">
              анализируем текущие документы и исследования,
              <br /> выдаем первичное коммерческое предложение.
            </div>
          </div>
          <Input
            textarea={true}
            labelHeight={'150px'}
            marginTop={'0px'}
            left={'0px'}
            placeholder={
              <div className="inputText">
                <span className="paragraph">1.</span>
                <span className="contentText">
                  Каких ещё целей вы должны достичь в ходе этого проекта?
                </span>
              </div>
            }
          />
          <Input
            textarea={false}
            labelHeight={'150px'}
            marginTopLabel={'53px'}
            left={'0px'}
            marginTop={'0px'}
            placeholder={
              <div className="inputText">
                <span className="paragraph">2.</span>
                <span className="contentText">
                  Пытались ли раньше закрыть эти задачи? Как? Из того, что вы
                  уже пробовали,
                  <br /> что сработало, а что нет?
                </span>
              </div>
            }
          />

          <Input
            textarea={true}
            labelHeight={'150px'}
            marginTopLabel={'53px'}
            left={'0px'}
            marginTop={'0px'}
            placeholder={
              <div className="inputText">
                <span className="paragraph">3.</span>
                <span className="contentText">
                  Каков принцип работы продукта? Как он устроен? Из каких частей
                  состоит?
                </span>
              </div>
            }
          />
          <Input
            textarea={false}
            labelHeight={'120px'}
            marginTopLabel={'53px'}
            left={'0px'}
            placeholder={
              <div className="inputText">
                <span className="paragraph">4.</span>
                <span className="contentText">
                  Каковы ваши предположения о пользователях? Что вы точно знаете
                  о пользователях?
                </span>
              </div>
            }
          />
          <Input
            textarea={true}
            labelHeight={'150px'}
            marginTopLabel={'53px'}
            left={'0px'}
            placeholder={
              <div className="inputText">
                <span className="paragraph">5.</span>
                <span className="contentText">
                  Кто ваши конкуренты? Чем вы от них отличаетесь? Какие у вас
                  преимущества и<br /> недостатки?
                </span>
              </div>
            }
          />
          <Input
            textarea={true}
            labelHeight={'150px'}
            marginTopLabel={'53px'}
            left={'0px'}
            placeholder={
              <div className="inputText">
                <span className="paragraph">6.</span>
                <span className="contentText">
                  Каковы ваши предположения о пользователях? Что вы точно знаете
                  о пользователях?
                </span>
              </div>
            }
          />
          <Input
            textarea={false}
            labelHeight={'130px'}
            marginTopLabel={'53px'}
            left={'0px'}
            placeholder={
              <div className="inputText">
                <span className="paragraph">7.</span>
                <span className="contentText">
                  Какие у пользователя есть альтернативы в решении этой
                  проблемы, помимо
                  <br /> конкурентов?
                </span>
              </div>
            }
          />
          <Input
            textarea={false}
            labelHeight={'120px'}
            marginTopLabel={'53px'}
            left={'0px'}
            placeholder={
              <div className="inputText">
                <span className="paragraph">8.</span>
                <span className="contentText">
                  Есть ли ещё что-то важное, о чем мы не спросили?
                </span>
              </div>
            }
          />
        </div>
      </div>
    </div>
  );
};

export default brief;
