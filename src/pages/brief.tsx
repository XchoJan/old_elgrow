import React, { useState, useEffect } from 'react';
import { useForm, useWatch, useFieldArray } from 'react-hook-form';
import Header from '../Components/Header';
import Input from '../Components/Input';
import { Store as notification } from 'react-notifications-component';
import axios from 'axios';

const brief = () => {
  const [max, setMax]: any = useState(0);
  useEffect(() => {
    setMax(window?.visualViewport?.width);
  }, []);

  const {
    register,
    handleSubmit,
    setValue,
    control,
    reset,
    formState: { errors },
  } = useForm<any>({
    defaultValues: {
      data: [
        {
          question: 'Как называется ваша компания?',
          text: '',
        },
        {
          question: 'Расскажите кратко о задаче',
          text: '',
        },
        {
          question: 'Постоянные ли это работы или единичный проект?',
          text: '',
        },
        {
          question: 'Какова срочность задачи?',
          text: '',
        },
        {
          question: 'Каковы ограничения по бюджету',
          text: '',
        },
        {
          question:
            'Кто будет участвовать в проекте на вашей стороне? Кто в этом проекте является ключевым лицом, принимающим решения?',
          text: '',
        },
        {
          question:
            'Есть ли в компании ИТ-подразделение? Маркетинг-подразделение? Дизайн подразделение?',
          text: '',
        },
        {
          question:
            'Существует ли какая-то значимая документация (персоны, user flow или другие), которую нам следует изучить перед звонком?',
          text: '',
        },
        {
          question: 'Есть ли NDA, который нужно подписать до созвона?',
          text: '',
        },
        {
          question:
            'Расскажите кратко, что вы знаете об Elgrow и как нас нашли?',
          text: '',
        },
        {
          question: 'Как вы работаете? На чем зарабатываете?',
          text: '',
        },
        {
          question: 'Как устроен ваш продукт? Благодаря чему он развивается?',
          text: '',
        },
        {
          question: 'Какая ближайшая задача сейчас стоит перед продуктом?',
          text: '',
        },
        {
          question:
            'Откуда появилась потребность в сайте / приложении / внутренне системе / другом…',
          text: '',
        },
        {
          question:
            'Какую цель для бизнеса преследуем? Например: привлечение клиентов, регистрации, удержание, прибыль, рекомендации и так далее',
          text: '',
        },
        {
          question: 'Какие ключевые метрики (KPI)?',
          text: '',
        },
        {
          question:
            'Есть ли какие-то ограничения (технологические, связанные с бизнесом и т.п.)?',
          text: '',
        },
        {
          question:
            'Есть ли какие-то продукты, на которые можно ориентироваться? (у конкурентов, из других сфер или другие ваши продукты)',
          text: '',
        },
        {
          question: 'Каких ещё целей вы должны достичь в ходе этого проекта?',
          text: '',
        },
        {
          question:
            'Пытались ли раньше закрыть эти задачи? Как? Из того, что вы уже пробовали, что сработало, а что нет?',
          text: '',
        },
        {
          question:
            'Каков принцип работы продукта? Как он устроен? Из каких частей состоит?',
          text: '',
        },
        {
          question:
            'Каковы ваши предположения о пользователях? Что вы точно знаете о пользователях?',
          text: '',
        },
        {
          question:
            'Кто ваши конкуренты? Чем вы от них отличаетесь? Какие у вас преимущества и недостатки?',
          text: '',
        },
        {
          question:
            'Каковы ваши предположения о пользователях? Что вы точно знаете о пользователях?',
          text: '',
        },
        {
          question:
            'Какие у пользователя есть альтернативы в решении этой проблемы, помимо конкурентов?',
          text: '',
        },
        {
          question: 'Есть ли ещё что-то важное, о чем мы не спросили?',
          text: '',
        },
      ],
    },
  });

  const taskUrgency = useWatch({
    control,
    name: `data.3.text`,
  });

  const { fields, append, prepend, remove, swap, move, insert, replace } =
    useFieldArray({
      control,
      name: 'data',
    });

  const notificationOptionsSuccess: any = {
    title: 'Бриф отправлен',
    type: 'success',
    animationIn: ['animate__animated', 'animate__fadeIn'],
    animationOut: ['animate__animated', 'animate__fadeOut'],
    container: 'top-right',
    dismiss: {
      duration: 5000,
    },
  };
  const notificationOptionsError: any = {
    title: 'Произошла ошибка отправки, попробуйте еще раз',
    type: 'error',
    animationIn: ['animate__animated', 'animate__fadeIn'],
    animationOut: ['animate__animated', 'animate__fadeOut'],
    container: 'top-right',
    dismiss: {
      duration: 5000,
    },
  };

  const sendForm = handleSubmit(async (dataForm) => {
    const response = await axios.post(
      'https://outstaff-server.elgrow.ru/api/brief',
      dataForm,
    );
    if (response.status !== 200) {
      notification.addNotification({
        ...notificationOptionsError,
      });
    } else {
      notification.addNotification({
        ...notificationOptionsSuccess,
      });
      reset({
        data: null,
      });
    }
  });

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
      <form onSubmit={sendForm}>
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
              reactHookForm={{
                ...register('data.0.text', { required: true }),
              }}
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
              reactHookForm={{
                ...register('data.1.text', { required: true }),
              }}
              labelHeight={'170px'}
              left={'0px'}
              marginTop={'0px'}
              marginTopLabel={'62px'}
              placeholder={
                <div className="inputText">
                  <span className="paragraph">2.</span>
                  <span className="contentText">
                    Расскажите кратко о задаче
                  </span>
                </div>
              }
            />

            <Input
              reactHookForm={{
                ...register('data.2.text', { required: true }),
              }}
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
                  <input
                    checked={taskUrgency === 'нужно уже вчера'}
                    onChange={(e: any) =>
                      e.currentTarget.checked
                        ? setValue('data.3.text', 'нужно уже вчера')
                        : setValue('data.3.text', '')
                    }
                    type="checkbox"
                    className="checkbox"
                  />
                  нужно уже вчера
                </label>
                <label className="checkbox-label">
                  <input
                    checked={taskUrgency === 'есть четкий дедлайн'}
                    onChange={(e: any) =>
                      e.currentTarget.checked
                        ? setValue('data.3.text', 'есть четкий дедлайн')
                        : setValue('data.3.text', '')
                    }
                    type="checkbox"
                    className="checkbox"
                  />
                  есть четкий дедлайн
                </label>
                <label className="checkbox-label">
                  <input
                    checked={taskUrgency === 'несрочная задача'}
                    onChange={(e: any) =>
                      e.currentTarget.checked
                        ? setValue('data.3.text', 'несрочная задача')
                        : setValue('data.3.text', '')
                    }
                    type="checkbox"
                    className="checkbox"
                  />
                  несрочная задача
                </label>
              </div>
            </div>

            <Input
              reactHookForm={{
                ...register('data.4.text', { required: true }),
              }}
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
              reactHookForm={{
                ...register('data.5.text', { required: true }),
              }}
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
              reactHookForm={{
                ...register('data.6.text', { required: true }),
              }}
              textarea={false}
              labelHeight={'120px'}
              left={'0px'}
              marginTopLabel={'62px'}
              placeholder={
                <div className="inputText">
                  <span className="paragraph">7.</span>
                  <span className="contentText">
                    Есть ли в компании ИТ-подразделение?
                    Маркетинг-подразделение?
                    <br /> Дизайн-подразделение?
                  </span>
                </div>
              }
            />
            <Input
              reactHookForm={{
                ...register('data.7.text', { required: true }),
              }}
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
              reactHookForm={{
                ...register('data.8.text', { required: true }),
              }}
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
              reactHookForm={{
                ...register('data.9.text', { required: true }),
              }}
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
                конкретизируем задачу, соберем бизнес-требования в<br />{' '}
                первичный технический документ, покажем кейсы
              </div>
            </div>
            <Input
              reactHookForm={{
                ...register('data.10.text', { required: true }),
              }}
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
              reactHookForm={{
                ...register('data.11.text', { required: true }),
              }}
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
              reactHookForm={{
                ...register('data.12.text', { required: true }),
              }}
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
              reactHookForm={{
                ...register('data.13.text', { required: true }),
              }}
              textarea={false}
              labelHeight={max > 560 ? '120px' : '140px'}
              left={'0px'}
              marginTop={'0px'}
              marginTopLabel={'73px'}
              placeholder={
                <div className="inputText">
                  <span className="paragraph">4.</span>
                  <span className="contentText">
                    Откуда появилась потребность в сайте / приложении /
                    внутренне <br /> системе / другом…
                  </span>
                </div>
              }
            />

            <Input
              reactHookForm={{
                ...register('data.14.text', { required: true }),
              }}
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
              reactHookForm={{
                ...register('data.15.text', { required: true }),
              }}
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
              reactHookForm={{
                ...register('data.16.text', { required: true }),
              }}
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
              reactHookForm={{
                ...register('data.17.text', { required: true }),
              }}
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
              reactHookForm={{
                ...register('data.18.text', { required: true }),
              }}
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
              reactHookForm={{
                ...register('data.19.text', { required: true }),
              }}
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
              reactHookForm={{
                ...register('data.20.text', { required: true }),
              }}
              textarea={true}
              labelHeight={'150px'}
              marginTopLabel={'53px'}
              left={'0px'}
              marginTop={'0px'}
              placeholder={
                <div className="inputText">
                  <span className="paragraph">3.</span>
                  <span className="contentText">
                    Каков принцип работы продукта? Как он устроен? Из каких
                    частей состоит?
                  </span>
                </div>
              }
            />
            <Input
              reactHookForm={{
                ...register('data.21.text', { required: true }),
              }}
              textarea={false}
              labelHeight={'120px'}
              marginTopLabel={'53px'}
              left={'0px'}
              placeholder={
                <div className="inputText">
                  <span className="paragraph">4.</span>
                  <span className="contentText">
                    Каковы ваши предположения о пользователях? Что вы точно
                    знаете о пользователях?
                  </span>
                </div>
              }
            />
            <Input
              reactHookForm={{
                ...register('data.22.text', { required: true }),
              }}
              textarea={true}
              labelHeight={'173px'}
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
              reactHookForm={{
                ...register('data.23.text', { required: true }),
              }}
              textarea={true}
              labelHeight={'173px'}
              marginTopLabel={'53px'}
              left={'0px'}
              placeholder={
                <div className="inputText">
                  <span className="paragraph">6.</span>
                  <span className="contentText">
                    Каковы ваши предположения о пользователях? Что вы точно
                    знаете о пользователях?
                  </span>
                </div>
              }
            />
            <Input
              reactHookForm={{
                ...register('data.24.text', { required: true }),
              }}
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
              reactHookForm={{
                ...register('data.25.text', { required: true }),
              }}
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
            <button type="submit"> Отправить</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default brief;
