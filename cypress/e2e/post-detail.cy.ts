import { fetchPostById } from "../../libs/rest-api/posts";

describe("Post Detail Page", () => {
  const postId = 1;

  beforeEach(async () => {
    cy.visit(`http://localhost:3000/posts/${postId}`);
  });

  it("go to list 버튼 클릭 시 리스트 페이지로 이동한다", () => {
    cy.url().should("include", "/posts/");
    cy.contains("go to list").click();
    cy.url().should("not.include", "/posts/");
  });
});
