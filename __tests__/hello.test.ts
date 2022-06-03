interface Hello {
  name: string;
}

const me: Hello = {
  name: "me",
};

describe("All tests", () => {
  it("works", () => {
    expect(me.name).toBe("me");
  });
});
