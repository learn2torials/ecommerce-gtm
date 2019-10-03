import Tags from "../tags";

const args = { id: "GTM-abc123", layer: "dataLayer" };
const tags = Tags.init(args);

describe("Tags", () => {
  it("should initialize script tags", () => {
    expect(tags.layer()).toBeTruthy();
    expect(tags.script()).toBeTruthy();
  });
});
