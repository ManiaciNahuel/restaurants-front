import "./HowTo.scss";

export default function HowTo() {
  return (
    <section className="howto">
      <h2>¿CÓMO PEDIR?</h2>

      <div className="howto__item">
        <span className="howto__number">1</span>
        <p>Ingresá el código que te dio el mozo</p>
      </div>

      <div className="howto__item">
        <span className="howto__number">2</span>
        <p>Mirá la carta y sumá lo que quieras al carrito</p>
      </div>

      <div className="howto__item">
        <span className="howto__number">3</span>
        <p>Enviá tu pedido cuando estés listo, ¡nos llega directo a cocina!</p>
      </div>
    </section>
  );
}
