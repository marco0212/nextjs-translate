import { Loading } from "./Loading";

it("전달된 message가 없으면 텍스트 Loading이 컴포넌트에 포함된다", () => {
  cy.mount(<Loading />);
  cy.contains("Loading");
});

it("전달된 message가 없으면 텍스트 Loading이 컴포넌트에 포함된다", () => {
  const message = "Please wait";
  cy.mount(<Loading message={message} />);
  cy.contains(message);
});

it("시간에 따라 message 뒤에 점이 최대 3개까지 붙는다", () => {
  cy.clock();
  cy.mount(<Loading />);

  cy.get("span").should("not.have.text", ".");
  cy.tick(500);

  cy.get("span").should("have.text", ".");
  cy.tick(500);

  cy.get("span").should("have.text", "..");
  cy.tick(500);

  cy.get("span").should("have.text", "...");
  cy.tick(500);

  cy.get("span").should("not.have.text", ".");
});
