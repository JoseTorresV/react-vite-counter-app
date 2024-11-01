import { fireEvent, render, screen } from "@testing-library/react";
import { CounterApp } from "../CounterApp";

describe("Tarea pruebas en <CounterApp>", () => {
  const valorInicial = 10;

  test("debe hacer match con el snapshot", () => {
    const value = 20;
    const { container } = render(<CounterApp value={value} />);
    expect(container).toMatchSnapshot();
  });

  test("debe mostrar el valor inicial de 100 <CounterApp value={100} />", () => {
    const value = 100;
    render(<CounterApp value={value} />);
    expect(screen.getByText(100)).toBeTruthy();
    expect(screen.getByRole("heading", { level: 2 }).innerHTML).toContain(
      value.toString()
    );
  });

  test("debe incrementar con el boton +1", () => {
    render(<CounterApp value={valorInicial} />);
    fireEvent.click(screen.getByText('+1'));
    // screen.debug()
    expect(screen.getByText((valorInicial + 1).toString())).toBeTruthy();
  });

  test("debe decrementar con el boton -1", () => {
    render(<CounterApp value={valorInicial} />);
    fireEvent.click(screen.getByText('-1'));
    // screen.debug()
    expect(screen.getByText('9')).toBeTruthy();
  });

  test("debe funcionar el boton reset", () => {
    render(<CounterApp value={valorInicial} />);
    fireEvent.click(screen.getByText('+1'));
    fireEvent.click(screen.getByText('+1'));
    // fireEvent.click(screen.getByText('Reset'));
    // screen.debug()
    fireEvent.click(screen.getByRole('button', { name: 'btn-reset' }));
    
    expect(screen.getByText('10')).toBeTruthy();
  });

});
