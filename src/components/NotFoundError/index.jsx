export function NotFoundError(){
  return (
    <div className="flex justify-center rounded-2xl p-4 text-center font-semibold text-subtitleClamp lg:text-sm items-center flex-col text-component-dark bg-component-light">
      <h2>Nenhum dado encontrado</h2>
      <p>Desculpe, não há informações disponíveis no momento.</p>
    </div>
  );
}