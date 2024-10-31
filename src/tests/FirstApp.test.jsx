import { render } from "@testing-library/react";
import { FirstApp } from "../FirstApp";

describe("Pruebas en <FirstApp>", () => {
  // test("debe hacer match con el snapshot", () => {
  //   const title = "Hola, Soy Goku";
  //   const { container } = render(<FirstApp title={title} />);

  //   expect(container).toMatchSnapshot();
  // });

  test("debe mostrar el titulo en un h1", () => {
    const title = "Hola, Soy Goku";
    const { container, getByText, getByTestId } = render(
      <FirstApp title={title} />
    );
    expect(getByText(title)).toBeTruthy();

    // const h1 = container.querySelector("h1");
    // console.log(h1.innerHTML);
    // expect(h1.innerHTML).toContain(title);

    // with toBe I have more control of the template (ex. spaces)
    expect(getByTestId("test-title").innerHTML).toBe(title);
    expect(getByTestId("test-title").innerHTML).toContain(title);
  });

  test("debe mostrar el subtitulo enviado por props", () => {
    const title = "Hola, Soy Goku";
    const subTitle = "Soy un subtitle";
    const { getAllByText } = render(
      <FirstApp title={title} subTitle={subTitle} />
    );
    
    expect(getAllByText(subTitle).length).toBe(2)
  });
});
