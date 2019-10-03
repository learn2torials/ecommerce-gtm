import GTM from "../gtm";

GTM.initialize({ id: "GTM-abc123", layer: "dataLayer" });

describe("TagManager", () => {
  it("should have layer", () => {
    const layer = GTM.layer();
    expect(layer).toBeTruthy();
    expect(layer.length).toEqual(1);
  });

  it("should have events", () => {
    GTM.event("test", { currencyCode: "CAD" });
    expect(GTM.layer().length).toEqual(2);
  });

  it("should have ecommerce", () => {
    GTM.ecommerce({ currencyCode: "USD" });
    expect(GTM.layer().length).toEqual(3);
  });
});
