describe("Post List Page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  it("타이틀이 표시된다", () => {
    cy.contains("Fucking Welcome Home Page");
  });

  it("100개의 포스트 리스트가 노출된다", () => {
    cy.get("li").should("have.length", 100);
  });

  it("포스트 클릭 시 상세 페이지로 이동한다", () => {
    cy.url().should("not.include", "/posts/");
    cy.get("li").eq(0).click();
    cy.url().should("include", "/posts/");
  });
});
