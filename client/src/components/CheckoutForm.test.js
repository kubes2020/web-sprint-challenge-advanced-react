import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
  render(<CheckoutForm />);

  const header = screen.getByText(/Checkout Form/i);
  expect(header).toBeInTheDocument();
});

test("form shows success message on submit with form details", async () => {
  render(<CheckoutForm />);

  const firstName = screen.getByLabelText(/first name/i);
  const lastName = screen.getByLabelText(/last name/i);
  const address = screen.getByLabelText(/address/i);
  const city = screen.getByLabelText(/city/i);
  const state = screen.getByLabelText(/state/i);
  const zip = screen.getByLabelText(/zip/i);
  const checkoutButton = screen.getByRole("button", /Checkout/i);

  fireEvent.change(firstName, { target: { value: "Brian" } });
  fireEvent.change(lastName, { target: { value: "Kubes" } });
  fireEvent.change(address, { target: { value: "3800 Country Club" } });
  fireEvent.change(city, { target: { value: "Los Angeles" } });
  fireEvent.change(state, { target: { value: "CA" } });
  fireEvent.change(zip, { target: { value: "90019" } });
  fireEvent.click(checkoutButton);

  const successMessage = await screen.findByText(
    /You have ordered some plants!/i
  );
  expect(successMessage).toBeInTheDocument();

  // You have ordered some plants!
});
