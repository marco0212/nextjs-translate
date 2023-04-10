describe("Post Detail Page", () => {
  const postId = 1;

  beforeEach(() => {
    cy.visit(`/posts/${postId}`);
  });

  it("go to list 버튼 클릭 시 리스트 페이지로 이동한다", () => {
    cy.contains("go to list").click();
    cy.contains("Fucking Welcome Home Page");
  });
});
