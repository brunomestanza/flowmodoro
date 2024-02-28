import { Helmet } from 'react-helmet-async'

import { SuggestionHoverCard } from './suggestion-hover-card'

export function About() {
  return (
    <>
      <Helmet title="Sobre" />
      <h2 className="border-b pb-2 text-3xl font-semibold tracking-tight">
        Motivação
      </h2>
      <p>
        Se tem algo que eu aprendi nesses anos, é que a concentração é uma
        benção, mas pode ser também uma maldição. As vezes preciso de uma hora
        pra fazer algo, em outros momentos, preciso apenas de alguns minutos. Ao
        invés de me forçar a ter pausas obrigatórias no fluxo das ideias, eu
        adotei uma nova estratégia de gestão de tempo e foco, chamada de
        Flowtime Technique (também conhecida como flowmodoro) que me encoraja a
        continuar trabalhando enquanto eu tiver foco pra me manter produtivo.
        Para entendermos melhor o seu funcionamento, é interessante entender sua
        &quot;base&quot;:
      </p>

      <h2 className="border-b pb-2 text-3xl font-semibold tracking-tight">
        Oque é a técnica de Pomodoro?
      </h2>
      <p>
        É importante entendermos a técnica de Pomodoro, já que como o nome
        sugere, o Flowmodoro se baseia nele. Em resumo, você inicia uma tarefa
        ou tempo de foco, trabalha nisso durante 25 minutos até esse tempo
        acabar. Em seguida, ocorrem 5 minutos de pausa, e esse processo se
        repete por mais 3 vezes. Depois disso, ocorre uma pausa que pode variar
        de 15 a 30 minutos. Isso é chamado de um fluxo completo no Pomodoro.
        Isso pode ser repetivo múltiplas vezes em um mesmo período. Como cada
        período de foco é relativamente curto e é seguido de uma pausa, a
        técnica de Pomodoro pode auxiliar na realização de tarefas indesejadas
        ou complexas. Isso porém, gera alguns problemas:
      </p>

      <h2 className="border-b pb-2 text-3xl font-semibold tracking-tight">
        Dificuldades no uso do Pomodoro
      </h2>
      <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
        <li>Dificuldade em atuar em atividades em conjunto como reuniões</li>
        <li>
          Quebra no processo criativo e no período de foco (também chamado de
          flow state), que consiste num período de grande foco e produtividade.
          O alarme e a pausa podem facilmente gerar a quebra do foco
        </li>
      </ul>

      <h2 className="border-b pb-2 text-3xl font-semibold tracking-tight">
        Oque é a técnica de Flowmodoro?
      </h2>
      <p>
        A técnica foi criada por Zoë Read-Bivens como uma solução para o
        principal problema do Pomodoro. Ainda temos a quebra em períodos de
        foco, porém ao invés de eles serem cronometrados, Flowmodoro permite uma
        imersão maior na tarefa com pausas mais naturais. De forma similar ao
        Pomodoro, ocorre o foco em uma tarefa. Trabalhe nessa tarefa até sentir
        cansaço ou distração. Quando isso acontecer, estamos no momento de uma
        pausa. Não há obrigatoriedade no tempo da pausa, mas a sugestão de
        Read-Bivens é a seguinte:
      </p>
      <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
        <li>Para 25 minutos de foco ou menos, tenha uma pausa de 5 minutos.</li>
        <li>Para 25 a 50 minutos de foco, tenha uma pausa de 8 minutos.</li>
        <li>Para 50 a 90 minutos de foco, tenha uma pausa de 10 minutos.</li>
        <li>Para mais de 90 minutos de foco, tenha uma pausa de 15 minutos.</li>
      </ul>
      <p>
        É importante dizer que isso é apenas uma sugestão, eu inclusive{' '}
        <SuggestionHoverCard />, já que geralmente tenho sessões de foco muito
        longas enquanto estudo. Se for necessário alterar o tempo da pausa, está
        tudo bem. Caso você se sinta frequentemente cansado(a) nas tarefas que
        tem que desenvolver, tente quebrar em menores pedaços, com um período de
        foco cada. Isso aumenta seu tempo de descanso, e consegue te dar a
        compreensão, de quanto tempo você consegue se manter produtivo.
      </p>

      <h2 className="border-b pb-2 text-3xl font-semibold tracking-tight">
        Benefícios no uso do Flowmodoro
      </h2>
      <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
        <li>
          Como você trabalha até a finalização da atividade, é possível entender
          o tempo de demora em cada uma, e realizar estimativas futuras
        </li>
        <li>
          Redução na interrupção de períodos de foco e maior foco nas tarefas
        </li>
        <li>Indentificar momentos do dia aonde você consegue focar melhor</li>
        <li>Criar uma estratégia personalizada de gestão de tempo</li>
      </ul>
    </>
  )
}
