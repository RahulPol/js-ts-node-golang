// Adapter is a structural design pattern that allows objects with
// incompatible interfaces to collaborate.

// A real-life example of an adapter would be a device that allows you to plug a USB
// Type-A cable into a USB Type-C port. In a generic sense, an adapter converts an
// object with a given interface so that it can be used in a context where a different
// interface is expected.

// Here’s how it works:

// 1. The adapter gets an interface, compatible with one of the existing objects.
// 2. Using this interface, the existing object can safely call the adapter’s methods.
// 3. Upon receiving a call, the adapter passes the request to the second object,
// but in a format and order that the second object expects.

// Sometimes it’s even possible to create a two-way adapter that can convert the calls in both directions.

// At the heart of this pattern is to being a mediator to allow one type of class or object
// to communicate with other type of class or object.

// Imagine that you’re creating a stock market monitoring app. The app downloads the stock data from multiple
// sources in XML format and then displays nice-looking charts and diagrams for the user.
// At some point, you decide to improve the app by integrating a smart 3rd-party analytics library.
// But there’s a catch: the analytics library only works with data in JSON format.

type XMLData = {
  xmlString: string;
};
type JSONData = {
  jsonString: string;
};

interface IAdapter {
  analyze(data: XMLData): void;
}

class Adapter implements IAdapter {
  jsonData: JSONData;
  xmlData: XMLData;
  xmlToJsonConverter(data: XMLData): JSONData {
    return { jsonString: data.xmlString };
  }

  jsonToXmlConverter(data: JSONData): XMLData {
    return { xmlString: data.jsonString };
  }

  analyze(data: XMLData): XMLData {
    this.jsonData = this.xmlToJsonConverter(data);
    const analyzedData = new ExternalService().analyzeData(this.jsonData);
    return this.jsonToXmlConverter(analyzedData);
  }
}

class ExternalService {
  analyzeData(data: JSONData): JSONData {
    //perform some analysis
    return data;
  }
}

class Client {
  data: XMLData;
  // the data is in binary format
  constructor(data: XMLData) {
    this.data = data;
  }

  analyzeData(): XMLData {
    return new Adapter().analyze(this.data);
  }
}
