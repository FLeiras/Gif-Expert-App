import { render, screen } from "@testing-library/react";
import GifGridItem from "../../src/components/GifGridItem";

describe("Pruebas en <GifGridItem/>", () => {
  const title = "Saitama";
  const url = "https://one-punch.com/saitama.jpg";
  test("debe hacer match del snapshot", () => {
    const { container } = render(<GifGridItem title={title} url={url} />);
    expect(container).toMatchSnapshot();
  });

  test("debe mostar laimagen con URL y el ALT indicado", () => {
    render(<GifGridItem title={title} url={url} />);
    const { src, alt } = screen.getByRole("img");
    expect(src).toBe(url);
    expect(alt).toBe(alt);
  });

  test("debe mostar el titulo", () => {
    render(<GifGridItem title={title} url={url} />);
    expect(screen.getByText(title)).toBeTruthy();
  });
});
