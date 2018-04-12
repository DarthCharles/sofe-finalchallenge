import { fromJS } from 'immutable';

export const stubbedSearch = fromJS({
  adults: 1,
  children: 1,
  departureDate: '2018-05-07T00:00:00-07:00',
  from: {
    name: 'Phoenix Sky Harbor International Airport', city: 'Phoenix', country: 'United States', iata: 'PHX'
  },
  returnDate: '2018-05-21T00:00:00-07:00',
  to: {
    name: 'Adolfo Sue1rez Madrid96 Barajas Airport', city: 'Madrid', country: 'Spain', iata: 'MAD'
  },
  travelClass: 'economy'
});

export const stubbedResponse = fromJS([
  {
    key: 12345,
    type: 'roundtrip',
    airlegs: [
      {
        departureAirport: {
          name: 'Licenciado Benito Juarez International Airport',
          city: 'Mexico City',
          country: 'mexico',
          iata: 'mex'
        },
        departureDate: '2018-04-05T08:25:00.000-0700',
        arrivalAirport: {
          name: 'Charles De Gaulle International Airport',
          city: 'Paris',
          country: 'france',
          iata: 'cdg'
        },
        arrivalDate: '2018-04-06T09:30:00.000-0700',
        segments: [
          {
            departureAirport: {
              airportName: 'Licenciado Benito Juarez International Airport',
              city: 'Mexico City',
              country: 'mexico',
              iata: 'mex'
            },
            arrivalAirport: {
              airportName: 'Chicago O Hare International Airport',
              city: 'Chicago',
              country: 'united states',
              iata: 'ord'
            },
            departureDate: '2018-04-05T08:25:00.000-0700',
            arrivalDate: '2018-04-05T12:45:00.000-0700',
            duration: 260,
            airLineMarketingName: 'United Airlines',
            airLineOperationName: 'United Airlines',
            airplaneData: '320',
            cabinTypes: [
              'Economy/Coach'
            ]
          },
          {
            departureAirport: {
              airportName: 'Chicago O Hare International Airport',
              city: 'Chicago',
              country: 'united states',
              iata: 'ord'
            },
            arrivalAirport: {
              airportName: 'Charles De Gaulle International Airport',
              city: 'Paris',
              country: 'france',
              iata: 'cdg'
            },
            departureDate: '2018-04-05T18:00:00.000-0700',
            arrivalDate: '2018-04-06T09:30:00.000-0700',
            duration: 510,
            airLineMarketingName: 'United Airlines',
            airLineOperationName: 'United Airlines',
            airplaneData: '763',
            cabinTypes: [
              'Economy/Coach'
            ]
          }
        ]
      },
      {
        departureAirport: {
          name: 'Charles De Gaulle International Airport',
          city: 'Paris',
          country: 'france',
          iata: 'cdg'
        },
        departureDate: '2018-04-09T07:45:00.000-0700',
        arrivalAirport: {
          name: 'Licenciado Benito Juarez International Airport',
          city: 'Mexico City',
          country: 'mexico',
          iata: 'mex'
        },
        arrivalDate: '2018-04-09T22:00:00.000-0700',
        segments: [
          {
            departureAirport: {
              airportName: 'Charles De Gaulle International Airport',
              city: 'Paris',
              country: 'france',
              iata: 'cdg'
            },
            arrivalAirport: {
              airportName: 'Frankfurt Am Main International Airport',
              city: 'Frankfurt',
              country: 'germany',
              iata: 'fra'
            },
            departureDate: '2018-04-09T07:45:00.000-0700',
            arrivalDate: '2018-04-09T09:00:00.000-0700',
            duration: 75,
            airLineMarketingName: 'United Airlines',
            airLineOperationName: 'Lufthansa Cargo',
            airplaneData: '320',
            cabinTypes: [
              'Economy/Coach'
            ]
          },
          {
            departureAirport: {
              airportName: 'Frankfurt Am Main International Airport',
              city: 'Frankfurt',
              country: 'germany',
              iata: 'fra'
            },
            arrivalAirport: {
              airportName: 'George Bush Intercontinental Houston Airport',
              city: 'Houston',
              country: 'united states',
              iata: 'iah'
            },
            departureDate: '2018-04-09T13:35:00.000-0700',
            arrivalDate: '2018-04-09T17:40:00.000-0700',
            duration: 665,
            airLineMarketingName: 'United Airlines',
            airLineOperationName: 'United Airlines',
            airplaneData: '777',
            cabinTypes: [
              'Economy/Coach'
            ]
          },
          {
            departureAirport: {
              airportName: 'George Bush Intercontinental Houston Airport',
              city: 'Houston',
              country: 'united states',
              iata: 'iah'
            },
            arrivalAirport: {
              airportName: 'Licenciado Benito Juarez International Airport',
              city: 'Mexico City',
              country: 'mexico',
              iata: 'mex'
            },
            departureDate: '2018-04-09T19:40:00.000-0700',
            arrivalDate: '2018-04-09T22:00:00.000-0700',
            duration: 140,
            airLineMarketingName: 'United Airlines',
            airLineOperationName: 'United Airlines',
            airplaneData: '319',
            cabinTypes: [
              'Economy/Coach'
            ]
          }
        ]
      }
    ],
    fares: {
      basePrice: {
        amount: 350.0,
        currencyCode: 'USD'
      },
      taxesPrice: {
        amount: 626.88,
        currencyCode: 'USD'
      },
      totalPrice: {
        amount: 976.88,
        currencyCode: 'USD'
      }
    }
  },
  {
    key: 12345,
    type: 'roundtrip',
    airlegs: [
      {
        departureAirport: {
          name: 'Licenciado Benito Juarez International Airport',
          city: 'Mexico City',
          country: 'mexico',
          iata: 'mex'
        },
        departureDate: '2018-04-05T07:30:00.000-0700',
        arrivalAirport: {
          name: 'Charles De Gaulle International Airport',
          city: 'Paris',
          country: 'france',
          iata: 'cdg'
        },
        arrivalDate: '2018-04-06T09:35:00.000-0700',
        segments: [
          {
            departureAirport: {
              airportName: 'Licenciado Benito Juarez International Airport',
              city: 'Mexico City',
              country: 'mexico',
              iata: 'mex'
            },
            arrivalAirport: {
              airportName: 'George Bush Intercontinental Houston Airport',
              city: 'Houston',
              country: 'united states',
              iata: 'iah'
            },
            departureDate: '2018-04-05T07:30:00.000-0700',
            arrivalDate: '2018-04-05T09:49:00.000-0700',
            duration: 139,
            airLineMarketingName: 'United Airlines',
            airLineOperationName: 'United Airlines',
            airplaneData: '319',
            cabinTypes: [
              'Economy/Coach'
            ]
          },
          {
            departureAirport: {
              airportName: 'George Bush Intercontinental Houston Airport',
              city: 'Houston',
              country: 'united states',
              iata: 'iah'
            },
            arrivalAirport: {
              airportName: 'Montreal / Pierre Elliott Trudeau International Airport',
              city: 'Montreal',
              country: 'canada',
              iata: 'yul'
            },
            departureDate: '2018-04-05T13:00:00.000-0700',
            arrivalDate: '2018-04-05T17:37:00.000-0700',
            duration: 217,
            airLineMarketingName: 'United Airlines',
            airLineOperationName: 'Air Canada',
            airplaneData: 'E75',
            cabinTypes: [
              'Economy/Coach'
            ]
          },
          {
            departureAirport: {
              airportName: 'Montreal / Pierre Elliott Trudeau International Airport',
              city: 'Montreal',
              country: 'canada',
              iata: 'yul'
            },
            arrivalAirport: {
              airportName: 'Charles De Gaulle International Airport',
              city: 'Paris',
              country: 'france',
              iata: 'cdg'
            },
            departureDate: '2018-04-05T20:55:00.000-0700',
            arrivalDate: '2018-04-06T09:35:00.000-0700',
            duration: 400,
            airLineMarketingName: 'United Airlines',
            airLineOperationName: 'Air Canada',
            airplaneData: '77W',
            cabinTypes: [
              'Economy/Coach'
            ]
          }
        ]
      },
      {
        departureAirport: {
          name: 'Charles De Gaulle International Airport',
          city: 'Paris',
          country: 'france',
          iata: 'cdg'
        },
        departureDate: '2018-04-09T07:45:00.000-0700',
        arrivalAirport: {
          name: 'Licenciado Benito Juarez International Airport',
          city: 'Mexico City',
          country: 'mexico',
          iata: 'mex'
        },
        arrivalDate: '2018-04-09T22:00:00.000-0700',
        segments: [
          {
            departureAirport: {
              airportName: 'Charles De Gaulle International Airport',
              city: 'Paris',
              country: 'france',
              iata: 'cdg'
            },
            arrivalAirport: {
              airportName: 'Frankfurt Am Main International Airport',
              city: 'Frankfurt',
              country: 'germany',
              iata: 'fra'
            },
            departureDate: '2018-04-09T07:45:00.000-0700',
            arrivalDate: '2018-04-09T09:00:00.000-0700',
            duration: 75,
            airLineMarketingName: 'United Airlines',
            airLineOperationName: 'Lufthansa Cargo',
            airplaneData: '320',
            cabinTypes: [
              'Economy/Coach'
            ]
          },
          {
            departureAirport: {
              airportName: 'Frankfurt Am Main International Airport',
              city: 'Frankfurt',
              country: 'germany',
              iata: 'fra'
            },
            arrivalAirport: {
              airportName: 'George Bush Intercontinental Houston Airport',
              city: 'Houston',
              country: 'united states',
              iata: 'iah'
            },
            departureDate: '2018-04-09T13:35:00.000-0700',
            arrivalDate: '2018-04-09T17:40:00.000-0700',
            duration: 665,
            airLineMarketingName: 'United Airlines',
            airLineOperationName: 'United Airlines',
            airplaneData: '777',
            cabinTypes: [
              'Economy/Coach'
            ]
          },
          {
            departureAirport: {
              airportName: 'George Bush Intercontinental Houston Airport',
              city: 'Houston',
              country: 'united states',
              iata: 'iah'
            },
            arrivalAirport: {
              airportName: 'Licenciado Benito Juarez International Airport',
              city: 'Mexico City',
              country: 'mexico',
              iata: 'mex'
            },
            departureDate: '2018-04-09T19:40:00.000-0700',
            arrivalDate: '2018-04-09T22:00:00.000-0700',
            duration: 140,
            airLineMarketingName: 'United Airlines',
            airLineOperationName: 'United Airlines',
            airplaneData: '319',
            cabinTypes: [
              'Economy/Coach'
            ]
          }
        ]
      }
    ],
    fares: {
      basePrice: {
        amount: 350.0,
        currencyCode: 'USD'
      },
      taxesPrice: {
        amount: 626.88,
        currencyCode: 'USD'
      },
      totalPrice: {
        amount: 976.88,
        currencyCode: 'USD'
      }
    }
  },
  {
    key: 12345,
    type: 'roundtrip',
    airlegs: [
      {
        departureAirport: {
          name: 'Licenciado Benito Juarez International Airport',
          city: 'Mexico City',
          country: 'mexico',
          iata: 'mex'
        },
        departureDate: '2018-04-05T05:40:00.000-0700',
        arrivalAirport: {
          name: 'Charles De Gaulle International Airport',
          city: 'Paris',
          country: 'france',
          iata: 'cdg'
        },
        arrivalDate: '2018-04-06T08:45:00.000-0700',
        segments: [
          {
            departureAirport: {
              airportName: 'Licenciado Benito Juarez International Airport',
              city: 'Mexico City',
              country: 'mexico',
              iata: 'mex'
            },
            arrivalAirport: {
              airportName: 'George Bush Intercontinental Houston Airport',
              city: 'Houston',
              country: 'united states',
              iata: 'iah'
            },
            departureDate: '2018-04-05T05:40:00.000-0700',
            arrivalDate: '2018-04-05T07:59:00.000-0700',
            duration: 139,
            airLineMarketingName: 'United Airlines',
            airLineOperationName: 'United Airlines',
            airplaneData: '738',
            cabinTypes: [
              'Economy/Coach'
            ]
          },
          {
            departureAirport: {
              airportName: 'George Bush Intercontinental Houston Airport',
              city: 'Houston',
              country: 'united states',
              iata: 'iah'
            },
            arrivalAirport: {
              airportName: 'Lester B. Pearson International Airport',
              city: 'Toronto',
              country: 'canada',
              iata: 'yyz'
            },
            departureDate: '2018-04-05T12:25:00.000-0700',
            arrivalDate: '2018-04-05T16:40:00.000-0700',
            duration: 195,
            airLineMarketingName: 'United Airlines',
            airLineOperationName: 'United Airlines',
            airplaneData: 'E7W',
            cabinTypes: [
              'Economy/Coach'
            ]
          },
          {
            departureAirport: {
              airportName: 'Lester B. Pearson International Airport',
              city: 'Toronto',
              country: 'canada',
              iata: 'yyz'
            },
            arrivalAirport: {
              airportName: 'Charles De Gaulle International Airport',
              city: 'Paris',
              country: 'france',
              iata: 'cdg'
            },
            departureDate: '2018-04-05T19:35:00.000-0700',
            arrivalDate: '2018-04-06T08:45:00.000-0700',
            duration: 430,
            airLineMarketingName: 'United Airlines',
            airLineOperationName: 'Air Canada',
            airplaneData: '77W',
            cabinTypes: [
              'Economy/Coach'
            ]
          }
        ]
      },
      {
        departureAirport: {
          name: 'Charles De Gaulle International Airport',
          city: 'Paris',
          country: 'france',
          iata: 'cdg'
        },
        departureDate: '2018-04-09T07:45:00.000-0700',
        arrivalAirport: {
          name: 'Licenciado Benito Juarez International Airport',
          city: 'Mexico City',
          country: 'mexico',
          iata: 'mex'
        },
        arrivalDate: '2018-04-09T22:00:00.000-0700',
        segments: [
          {
            departureAirport: {
              airportName: 'Charles De Gaulle International Airport',
              city: 'Paris',
              country: 'france',
              iata: 'cdg'
            },
            arrivalAirport: {
              airportName: 'Frankfurt Am Main International Airport',
              city: 'Frankfurt',
              country: 'germany',
              iata: 'fra'
            },
            departureDate: '2018-04-09T07:45:00.000-0700',
            arrivalDate: '2018-04-09T09:00:00.000-0700',
            duration: 75,
            airLineMarketingName: 'United Airlines',
            airLineOperationName: 'Lufthansa Cargo',
            airplaneData: '320',
            cabinTypes: [
              'Economy/Coach'
            ]
          },
          {
            departureAirport: {
              airportName: 'Frankfurt Am Main International Airport',
              city: 'Frankfurt',
              country: 'germany',
              iata: 'fra'
            },
            arrivalAirport: {
              airportName: 'George Bush Intercontinental Houston Airport',
              city: 'Houston',
              country: 'united states',
              iata: 'iah'
            },
            departureDate: '2018-04-09T13:35:00.000-0700',
            arrivalDate: '2018-04-09T17:40:00.000-0700',
            duration: 665,
            airLineMarketingName: 'United Airlines',
            airLineOperationName: 'United Airlines',
            airplaneData: '777',
            cabinTypes: [
              'Economy/Coach'
            ]
          },
          {
            departureAirport: {
              airportName: 'George Bush Intercontinental Houston Airport',
              city: 'Houston',
              country: 'united states',
              iata: 'iah'
            },
            arrivalAirport: {
              airportName: 'Licenciado Benito Juarez International Airport',
              city: 'Mexico City',
              country: 'mexico',
              iata: 'mex'
            },
            departureDate: '2018-04-09T19:40:00.000-0700',
            arrivalDate: '2018-04-09T22:00:00.000-0700',
            duration: 140,
            airLineMarketingName: 'United Airlines',
            airLineOperationName: 'United Airlines',
            airplaneData: '319',
            cabinTypes: [
              'Economy/Coach'
            ]
          }
        ]
      }
    ],
    fares: {
      basePrice: {
        amount: 350.0,
        currencyCode: 'USD'
      },
      taxesPrice: {
        amount: 630.38,
        currencyCode: 'USD'
      },
      totalPrice: {
        amount: 980.38,
        currencyCode: 'USD'
      }
    }
  },
  {
    key: 12345,
    type: 'roundtrip',
    airlegs: [
      {
        departureAirport: {
          name: 'Licenciado Benito Juarez International Airport',
          city: 'Mexico City',
          country: 'mexico',
          iata: 'mex'
        },
        departureDate: '2018-04-05T05:40:00.000-0700',
        arrivalAirport: {
          name: 'Charles De Gaulle International Airport',
          city: 'Paris',
          country: 'france',
          iata: 'cdg'
        },
        arrivalDate: '2018-04-06T06:55:00.000-0700',
        segments: [
          {
            departureAirport: {
              airportName: 'Licenciado Benito Juarez International Airport',
              city: 'Mexico City',
              country: 'mexico',
              iata: 'mex'
            },
            arrivalAirport: {
              airportName: 'George Bush Intercontinental Houston Airport',
              city: 'Houston',
              country: 'united states',
              iata: 'iah'
            },
            departureDate: '2018-04-05T05:40:00.000-0700',
            arrivalDate: '2018-04-05T07:59:00.000-0700',
            duration: 139,
            airLineMarketingName: 'United Airlines',
            airLineOperationName: 'United Airlines',
            airplaneData: '738',
            cabinTypes: [
              'Economy/Coach'
            ]
          },
          {
            departureAirport: {
              airportName: 'George Bush Intercontinental Houston Airport',
              city: 'Houston',
              country: 'united states',
              iata: 'iah'
            },
            arrivalAirport: {
              airportName: 'Washington Dulles International Airport',
              city: 'Washington',
              country: 'united states',
              iata: 'iad'
            },
            departureDate: '2018-04-05T12:05:00.000-0700',
            arrivalDate: '2018-04-05T16:02:00.000-0700',
            duration: 177,
            airLineMarketingName: 'United Airlines',
            airLineOperationName: 'United Airlines',
            airplaneData: '763',
            cabinTypes: [
              'Economy/Coach'
            ]
          },
          {
            departureAirport: {
              airportName: 'Washington Dulles International Airport',
              city: 'Washington',
              country: 'united states',
              iata: 'iad'
            },
            arrivalAirport: {
              airportName: 'Charles De Gaulle International Airport',
              city: 'Paris',
              country: 'france',
              iata: 'cdg'
            },
            departureDate: '2018-04-05T17:20:00.000-0700',
            arrivalDate: '2018-04-06T06:55:00.000-0700',
            duration: 455,
            airLineMarketingName: 'United Airlines',
            airLineOperationName: 'United Airlines',
            airplaneData: '788',
            cabinTypes: [
              'Economy/Coach'
            ]
          }
        ]
      },
      {
        departureAirport: {
          name: 'Charles De Gaulle International Airport',
          city: 'Paris',
          country: 'france',
          iata: 'cdg'
        },
        departureDate: '2018-04-09T07:45:00.000-0700',
        arrivalAirport: {
          name: 'Licenciado Benito Juarez International Airport',
          city: 'Mexico City',
          country: 'mexico',
          iata: 'mex'
        },
        arrivalDate: '2018-04-09T22:00:00.000-0700',
        segments: [
          {
            departureAirport: {
              airportName: 'Charles De Gaulle International Airport',
              city: 'Paris',
              country: 'france',
              iata: 'cdg'
            },
            arrivalAirport: {
              airportName: 'Frankfurt Am Main International Airport',
              city: 'Frankfurt',
              country: 'germany',
              iata: 'fra'
            },
            departureDate: '2018-04-09T07:45:00.000-0700',
            arrivalDate: '2018-04-09T09:00:00.000-0700',
            duration: 75,
            airLineMarketingName: 'United Airlines',
            airLineOperationName: 'Lufthansa Cargo',
            airplaneData: '320',
            cabinTypes: [
              'Economy/Coach'
            ]
          },
          {
            departureAirport: {
              airportName: 'Frankfurt Am Main International Airport',
              city: 'Frankfurt',
              country: 'germany',
              iata: 'fra'
            },
            arrivalAirport: {
              airportName: 'George Bush Intercontinental Houston Airport',
              city: 'Houston',
              country: 'united states',
              iata: 'iah'
            },
            departureDate: '2018-04-09T13:35:00.000-0700',
            arrivalDate: '2018-04-09T17:40:00.000-0700',
            duration: 665,
            airLineMarketingName: 'United Airlines',
            airLineOperationName: 'United Airlines',
            airplaneData: '777',
            cabinTypes: [
              'Economy/Coach'
            ]
          },
          {
            departureAirport: {
              airportName: 'George Bush Intercontinental Houston Airport',
              city: 'Houston',
              country: 'united states',
              iata: 'iah'
            },
            arrivalAirport: {
              airportName: 'Licenciado Benito Juarez International Airport',
              city: 'Mexico City',
              country: 'mexico',
              iata: 'mex'
            },
            departureDate: '2018-04-09T19:40:00.000-0700',
            arrivalDate: '2018-04-09T22:00:00.000-0700',
            duration: 140,
            airLineMarketingName: 'United Airlines',
            airLineOperationName: 'United Airlines',
            airplaneData: '319',
            cabinTypes: [
              'Economy/Coach'
            ]
          }
        ]
      }
    ],
    fares: {
      basePrice: {
        amount: 350.0,
        currencyCode: 'USD'
      },
      taxesPrice: {
        amount: 631.38,
        currencyCode: 'USD'
      },
      totalPrice: {
        amount: 981.38,
        currencyCode: 'USD'
      }
    }
  },
  {
    key: 12345,
    type: 'roundtrip',
    airlegs: [
      {
        departureAirport: {
          name: 'Licenciado Benito Juarez International Airport',
          city: 'Mexico City',
          country: 'mexico',
          iata: 'mex'
        },
        departureDate: '2018-04-05T07:30:00.000-0700',
        arrivalAirport: {
          name: 'Charles De Gaulle International Airport',
          city: 'Paris',
          country: 'france',
          iata: 'cdg'
        },
        arrivalDate: '2018-04-06T09:30:00.000-0700',
        segments: [
          {
            departureAirport: {
              airportName: 'Licenciado Benito Juarez International Airport',
              city: 'Mexico City',
              country: 'mexico',
              iata: 'mex'
            },
            arrivalAirport: {
              airportName: 'George Bush Intercontinental Houston Airport',
              city: 'Houston',
              country: 'united states',
              iata: 'iah'
            },
            departureDate: '2018-04-05T07:30:00.000-0700',
            arrivalDate: '2018-04-05T09:49:00.000-0700',
            duration: 139,
            airLineMarketingName: 'United Airlines',
            airLineOperationName: 'United Airlines',
            airplaneData: '319',
            cabinTypes: [
              'Economy/Coach'
            ]
          },
          {
            departureAirport: {
              airportName: 'George Bush Intercontinental Houston Airport',
              city: 'Houston',
              country: 'united states',
              iata: 'iah'
            },
            arrivalAirport: {
              airportName: 'Chicago O Hare International Airport',
              city: 'Chicago',
              country: 'united states',
              iata: 'ord'
            },
            departureDate: '2018-04-05T11:55:00.000-0700',
            arrivalDate: '2018-04-05T14:36:00.000-0700',
            duration: 161,
            airLineMarketingName: 'United Airlines',
            airLineOperationName: 'United Airlines',
            airplaneData: '739',
            cabinTypes: [
              'Economy/Coach'
            ]
          },
          {
            departureAirport: {
              airportName: 'Chicago O Hare International Airport',
              city: 'Chicago',
              country: 'united states',
              iata: 'ord'
            },
            arrivalAirport: {
              airportName: 'Charles De Gaulle International Airport',
              city: 'Paris',
              country: 'france',
              iata: 'cdg'
            },
            departureDate: '2018-04-05T18:00:00.000-0700',
            arrivalDate: '2018-04-06T09:30:00.000-0700',
            duration: 510,
            airLineMarketingName: 'United Airlines',
            airLineOperationName: 'United Airlines',
            airplaneData: '763',
            cabinTypes: [
              'Economy/Coach'
            ]
          }
        ]
      },
      {
        departureAirport: {
          name: 'Charles De Gaulle International Airport',
          city: 'Paris',
          country: 'france',
          iata: 'cdg'
        },
        departureDate: '2018-04-09T07:45:00.000-0700',
        arrivalAirport: {
          name: 'Licenciado Benito Juarez International Airport',
          city: 'Mexico City',
          country: 'mexico',
          iata: 'mex'
        },
        arrivalDate: '2018-04-09T22:00:00.000-0700',
        segments: [
          {
            departureAirport: {
              airportName: 'Charles De Gaulle International Airport',
              city: 'Paris',
              country: 'france',
              iata: 'cdg'
            },
            arrivalAirport: {
              airportName: 'Frankfurt Am Main International Airport',
              city: 'Frankfurt',
              country: 'germany',
              iata: 'fra'
            },
            departureDate: '2018-04-09T07:45:00.000-0700',
            arrivalDate: '2018-04-09T09:00:00.000-0700',
            duration: 75,
            airLineMarketingName: 'United Airlines',
            airLineOperationName: 'Lufthansa Cargo',
            airplaneData: '320',
            cabinTypes: [
              'Economy/Coach'
            ]
          },
          {
            departureAirport: {
              airportName: 'Frankfurt Am Main International Airport',
              city: 'Frankfurt',
              country: 'germany',
              iata: 'fra'
            },
            arrivalAirport: {
              airportName: 'George Bush Intercontinental Houston Airport',
              city: 'Houston',
              country: 'united states',
              iata: 'iah'
            },
            departureDate: '2018-04-09T13:35:00.000-0700',
            arrivalDate: '2018-04-09T17:40:00.000-0700',
            duration: 665,
            airLineMarketingName: 'United Airlines',
            airLineOperationName: 'United Airlines',
            airplaneData: '777',
            cabinTypes: [
              'Economy/Coach'
            ]
          },
          {
            departureAirport: {
              airportName: 'George Bush Intercontinental Houston Airport',
              city: 'Houston',
              country: 'united states',
              iata: 'iah'
            },
            arrivalAirport: {
              airportName: 'Licenciado Benito Juarez International Airport',
              city: 'Mexico City',
              country: 'mexico',
              iata: 'mex'
            },
            departureDate: '2018-04-09T19:40:00.000-0700',
            arrivalDate: '2018-04-09T22:00:00.000-0700',
            duration: 140,
            airLineMarketingName: 'United Airlines',
            airLineOperationName: 'United Airlines',
            airplaneData: '319',
            cabinTypes: [
              'Economy/Coach'
            ]
          }
        ]
      }
    ],
    fares: {
      basePrice: {
        amount: 350.0,
        currencyCode: 'USD'
      },
      taxesPrice: {
        amount: 631.38,
        currencyCode: 'USD'
      },
      totalPrice: {
        amount: 981.38,
        currencyCode: 'USD'
      }
    }
  },
  {
    key: 12345,
    type: 'roundtrip',
    airlegs: [
      {
        departureAirport: {
          name: 'Licenciado Benito Juarez International Airport',
          city: 'Mexico City',
          country: 'mexico',
          iata: 'mex'
        },
        departureDate: '2018-04-05T05:40:00.000-0700',
        arrivalAirport: {
          name: 'Charles De Gaulle International Airport',
          city: 'Paris',
          country: 'france',
          iata: 'cdg'
        },
        arrivalDate: '2018-04-06T07:45:00.000-0700',
        segments: [
          {
            departureAirport: {
              airportName: 'Licenciado Benito Juarez International Airport',
              city: 'Mexico City',
              country: 'mexico',
              iata: 'mex'
            },
            arrivalAirport: {
              airportName: 'George Bush Intercontinental Houston Airport',
              city: 'Houston',
              country: 'united states',
              iata: 'iah'
            },
            departureDate: '2018-04-05T05:40:00.000-0700',
            arrivalDate: '2018-04-05T07:59:00.000-0700',
            duration: 139,
            airLineMarketingName: 'United Airlines',
            airLineOperationName: 'United Airlines',
            airplaneData: '738',
            cabinTypes: [
              'Economy/Coach'
            ]
          },
          {
            departureAirport: {
              airportName: 'George Bush Intercontinental Houston Airport',
              city: 'Houston',
              country: 'united states',
              iata: 'iah'
            },
            arrivalAirport: {
              airportName: 'Newark Liberty International Airport',
              city: 'Newark',
              country: 'united states',
              iata: 'ewr'
            },
            departureDate: '2018-04-05T10:25:00.000-0700',
            arrivalDate: '2018-04-05T14:51:00.000-0700',
            duration: 206,
            airLineMarketingName: 'United Airlines',
            airLineOperationName: 'United Airlines',
            airplaneData: '777',
            cabinTypes: [
              'Economy/Coach'
            ]
          },
          {
            departureAirport: {
              airportName: 'Newark Liberty International Airport',
              city: 'Newark',
              country: 'united states',
              iata: 'ewr'
            },
            arrivalAirport: {
              airportName: 'Charles De Gaulle International Airport',
              city: 'Paris',
              country: 'france',
              iata: 'cdg'
            },
            departureDate: '2018-04-05T18:30:00.000-0700',
            arrivalDate: '2018-04-06T07:45:00.000-0700',
            duration: 435,
            airLineMarketingName: 'United Airlines',
            airLineOperationName: 'United Airlines',
            airplaneData: '777',
            cabinTypes: [
              'Economy/Coach'
            ]
          }
        ]
      },
      {
        departureAirport: {
          name: 'Charles De Gaulle International Airport',
          city: 'Paris',
          country: 'france',
          iata: 'cdg'
        },
        departureDate: '2018-04-09T07:45:00.000-0700',
        arrivalAirport: {
          name: 'Licenciado Benito Juarez International Airport',
          city: 'Mexico City',
          country: 'mexico',
          iata: 'mex'
        },
        arrivalDate: '2018-04-09T22:00:00.000-0700',
        segments: [
          {
            departureAirport: {
              airportName: 'Charles De Gaulle International Airport',
              city: 'Paris',
              country: 'france',
              iata: 'cdg'
            },
            arrivalAirport: {
              airportName: 'Frankfurt Am Main International Airport',
              city: 'Frankfurt',
              country: 'germany',
              iata: 'fra'
            },
            departureDate: '2018-04-09T07:45:00.000-0700',
            arrivalDate: '2018-04-09T09:00:00.000-0700',
            duration: 75,
            airLineMarketingName: 'United Airlines',
            airLineOperationName: 'Lufthansa Cargo',
            airplaneData: '320',
            cabinTypes: [
              'Economy/Coach'
            ]
          },
          {
            departureAirport: {
              airportName: 'Frankfurt Am Main International Airport',
              city: 'Frankfurt',
              country: 'germany',
              iata: 'fra'
            },
            arrivalAirport: {
              airportName: 'George Bush Intercontinental Houston Airport',
              city: 'Houston',
              country: 'united states',
              iata: 'iah'
            },
            departureDate: '2018-04-09T13:35:00.000-0700',
            arrivalDate: '2018-04-09T17:40:00.000-0700',
            duration: 665,
            airLineMarketingName: 'United Airlines',
            airLineOperationName: 'United Airlines',
            airplaneData: '777',
            cabinTypes: [
              'Economy/Coach'
            ]
          },
          {
            departureAirport: {
              airportName: 'George Bush Intercontinental Houston Airport',
              city: 'Houston',
              country: 'united states',
              iata: 'iah'
            },
            arrivalAirport: {
              airportName: 'Licenciado Benito Juarez International Airport',
              city: 'Mexico City',
              country: 'mexico',
              iata: 'mex'
            },
            departureDate: '2018-04-09T19:40:00.000-0700',
            arrivalDate: '2018-04-09T22:00:00.000-0700',
            duration: 140,
            airLineMarketingName: 'United Airlines',
            airLineOperationName: 'United Airlines',
            airplaneData: '319',
            cabinTypes: [
              'Economy/Coach'
            ]
          }
        ]
      }
    ],
    fares: {
      basePrice: {
        amount: 350.0,
        currencyCode: 'USD'
      },
      taxesPrice: {
        amount: 631.38,
        currencyCode: 'USD'
      },
      totalPrice: {
        amount: 981.38,
        currencyCode: 'USD'
      }
    }
  },
  {
    key: 12345,
    type: 'roundtrip',
    airlegs: [
      {
        departureAirport: {
          name: 'Licenciado Benito Juarez International Airport',
          city: 'Mexico City',
          country: 'mexico',
          iata: 'mex'
        },
        departureDate: '2018-04-05T05:40:00.000-0700',
        arrivalAirport: {
          name: 'Charles De Gaulle International Airport',
          city: 'Paris',
          country: 'france',
          iata: 'cdg'
        },
        arrivalDate: '2018-04-06T09:30:00.000-0700',
        segments: [
          {
            departureAirport: {
              airportName: 'Licenciado Benito Juarez International Airport',
              city: 'Mexico City',
              country: 'mexico',
              iata: 'mex'
            },
            arrivalAirport: {
              airportName: 'George Bush Intercontinental Houston Airport',
              city: 'Houston',
              country: 'united states',
              iata: 'iah'
            },
            departureDate: '2018-04-05T05:40:00.000-0700',
            arrivalDate: '2018-04-05T07:59:00.000-0700',
            duration: 139,
            airLineMarketingName: 'United Airlines',
            airLineOperationName: 'United Airlines',
            airplaneData: '738',
            cabinTypes: [
              'Economy/Coach'
            ]
          },
          {
            departureAirport: {
              airportName: 'George Bush Intercontinental Houston Airport',
              city: 'Houston',
              country: 'united states',
              iata: 'iah'
            },
            arrivalAirport: {
              airportName: 'Chicago O Hare International Airport',
              city: 'Chicago',
              country: 'united states',
              iata: 'ord'
            },
            departureDate: '2018-04-05T10:07:00.000-0700',
            arrivalDate: '2018-04-05T12:50:00.000-0700',
            duration: 163,
            airLineMarketingName: 'United Airlines',
            airLineOperationName: 'United Airlines',
            airplaneData: '738',
            cabinTypes: [
              'Economy/Coach'
            ]
          },
          {
            departureAirport: {
              airportName: 'Chicago O Hare International Airport',
              city: 'Chicago',
              country: 'united states',
              iata: 'ord'
            },
            arrivalAirport: {
              airportName: 'Charles De Gaulle International Airport',
              city: 'Paris',
              country: 'france',
              iata: 'cdg'
            },
            departureDate: '2018-04-05T18:00:00.000-0700',
            arrivalDate: '2018-04-06T09:30:00.000-0700',
            duration: 510,
            airLineMarketingName: 'United Airlines',
            airLineOperationName: 'United Airlines',
            airplaneData: '763',
            cabinTypes: [
              'Economy/Coach'
            ]
          }
        ]
      },
      {
        departureAirport: {
          name: 'Charles De Gaulle International Airport',
          city: 'Paris',
          country: 'france',
          iata: 'cdg'
        },
        departureDate: '2018-04-09T07:45:00.000-0700',
        arrivalAirport: {
          name: 'Licenciado Benito Juarez International Airport',
          city: 'Mexico City',
          country: 'mexico',
          iata: 'mex'
        },
        arrivalDate: '2018-04-09T22:00:00.000-0700',
        segments: [
          {
            departureAirport: {
              airportName: 'Charles De Gaulle International Airport',
              city: 'Paris',
              country: 'france',
              iata: 'cdg'
            },
            arrivalAirport: {
              airportName: 'Frankfurt Am Main International Airport',
              city: 'Frankfurt',
              country: 'germany',
              iata: 'fra'
            },
            departureDate: '2018-04-09T07:45:00.000-0700',
            arrivalDate: '2018-04-09T09:00:00.000-0700',
            duration: 75,
            airLineMarketingName: 'United Airlines',
            airLineOperationName: 'Lufthansa Cargo',
            airplaneData: '320',
            cabinTypes: [
              'Economy/Coach'
            ]
          },
          {
            departureAirport: {
              airportName: 'Frankfurt Am Main International Airport',
              city: 'Frankfurt',
              country: 'germany',
              iata: 'fra'
            },
            arrivalAirport: {
              airportName: 'George Bush Intercontinental Houston Airport',
              city: 'Houston',
              country: 'united states',
              iata: 'iah'
            },
            departureDate: '2018-04-09T13:35:00.000-0700',
            arrivalDate: '2018-04-09T17:40:00.000-0700',
            duration: 665,
            airLineMarketingName: 'United Airlines',
            airLineOperationName: 'United Airlines',
            airplaneData: '777',
            cabinTypes: [
              'Economy/Coach'
            ]
          },
          {
            departureAirport: {
              airportName: 'George Bush Intercontinental Houston Airport',
              city: 'Houston',
              country: 'united states',
              iata: 'iah'
            },
            arrivalAirport: {
              airportName: 'Licenciado Benito Juarez International Airport',
              city: 'Mexico City',
              country: 'mexico',
              iata: 'mex'
            },
            departureDate: '2018-04-09T19:40:00.000-0700',
            arrivalDate: '2018-04-09T22:00:00.000-0700',
            duration: 140,
            airLineMarketingName: 'United Airlines',
            airLineOperationName: 'United Airlines',
            airplaneData: '319',
            cabinTypes: [
              'Economy/Coach'
            ]
          }
        ]
      }
    ],
    fares: {
      basePrice: {
        amount: 350.0,
        currencyCode: 'USD'
      },
      taxesPrice: {
        amount: 631.38,
        currencyCode: 'USD'
      },
      totalPrice: {
        amount: 981.38,
        currencyCode: 'USD'
      }
    }
  },
  {
    key: 12345,
    type: 'roundtrip',
    airlegs: [
      {
        departureAirport: {
          name: 'Licenciado Benito Juarez International Airport',
          city: 'Mexico City',
          country: 'mexico',
          iata: 'mex'
        },
        departureDate: '2018-04-05T05:40:00.000-0700',
        arrivalAirport: {
          name: 'Charles De Gaulle International Airport',
          city: 'Paris',
          country: 'france',
          iata: 'cdg'
        },
        arrivalDate: '2018-04-06T09:30:00.000-0700',
        segments: [
          {
            departureAirport: {
              airportName: 'Licenciado Benito Juarez International Airport',
              city: 'Mexico City',
              country: 'mexico',
              iata: 'mex'
            },
            arrivalAirport: {
              airportName: 'George Bush Intercontinental Houston Airport',
              city: 'Houston',
              country: 'united states',
              iata: 'iah'
            },
            departureDate: '2018-04-05T05:40:00.000-0700',
            arrivalDate: '2018-04-05T07:59:00.000-0700',
            duration: 139,
            airLineMarketingName: 'United Airlines',
            airLineOperationName: 'United Airlines',
            airplaneData: '738',
            cabinTypes: [
              'Economy/Coach'
            ]
          },
          {
            departureAirport: {
              airportName: 'George Bush Intercontinental Houston Airport',
              city: 'Houston',
              country: 'united states',
              iata: 'iah'
            },
            arrivalAirport: {
              airportName: 'Chicago O Hare International Airport',
              city: 'Chicago',
              country: 'united states',
              iata: 'ord'
            },
            departureDate: '2018-04-05T11:55:00.000-0700',
            arrivalDate: '2018-04-05T14:36:00.000-0700',
            duration: 161,
            airLineMarketingName: 'United Airlines',
            airLineOperationName: 'United Airlines',
            airplaneData: '739',
            cabinTypes: [
              'Economy/Coach'
            ]
          },
          {
            departureAirport: {
              airportName: 'Chicago O Hare International Airport',
              city: 'Chicago',
              country: 'united states',
              iata: 'ord'
            },
            arrivalAirport: {
              airportName: 'Charles De Gaulle International Airport',
              city: 'Paris',
              country: 'france',
              iata: 'cdg'
            },
            departureDate: '2018-04-05T18:00:00.000-0700',
            arrivalDate: '2018-04-06T09:30:00.000-0700',
            duration: 510,
            airLineMarketingName: 'United Airlines',
            airLineOperationName: 'United Airlines',
            airplaneData: '763',
            cabinTypes: [
              'Economy/Coach'
            ]
          }
        ]
      },
      {
        departureAirport: {
          name: 'Charles De Gaulle International Airport',
          city: 'Paris',
          country: 'france',
          iata: 'cdg'
        },
        departureDate: '2018-04-09T07:45:00.000-0700',
        arrivalAirport: {
          name: 'Licenciado Benito Juarez International Airport',
          city: 'Mexico City',
          country: 'mexico',
          iata: 'mex'
        },
        arrivalDate: '2018-04-09T22:00:00.000-0700',
        segments: [
          {
            departureAirport: {
              airportName: 'Charles De Gaulle International Airport',
              city: 'Paris',
              country: 'france',
              iata: 'cdg'
            },
            arrivalAirport: {
              airportName: 'Frankfurt Am Main International Airport',
              city: 'Frankfurt',
              country: 'germany',
              iata: 'fra'
            },
            departureDate: '2018-04-09T07:45:00.000-0700',
            arrivalDate: '2018-04-09T09:00:00.000-0700',
            duration: 75,
            airLineMarketingName: 'United Airlines',
            airLineOperationName: 'Lufthansa Cargo',
            airplaneData: '320',
            cabinTypes: [
              'Economy/Coach'
            ]
          },
          {
            departureAirport: {
              airportName: 'Frankfurt Am Main International Airport',
              city: 'Frankfurt',
              country: 'germany',
              iata: 'fra'
            },
            arrivalAirport: {
              airportName: 'George Bush Intercontinental Houston Airport',
              city: 'Houston',
              country: 'united states',
              iata: 'iah'
            },
            departureDate: '2018-04-09T13:35:00.000-0700',
            arrivalDate: '2018-04-09T17:40:00.000-0700',
            duration: 665,
            airLineMarketingName: 'United Airlines',
            airLineOperationName: 'United Airlines',
            airplaneData: '777',
            cabinTypes: [
              'Economy/Coach'
            ]
          },
          {
            departureAirport: {
              airportName: 'George Bush Intercontinental Houston Airport',
              city: 'Houston',
              country: 'united states',
              iata: 'iah'
            },
            arrivalAirport: {
              airportName: 'Licenciado Benito Juarez International Airport',
              city: 'Mexico City',
              country: 'mexico',
              iata: 'mex'
            },
            departureDate: '2018-04-09T19:40:00.000-0700',
            arrivalDate: '2018-04-09T22:00:00.000-0700',
            duration: 140,
            airLineMarketingName: 'United Airlines',
            airLineOperationName: 'United Airlines',
            airplaneData: '319',
            cabinTypes: [
              'Economy/Coach'
            ]
          }
        ]
      }
    ],
    fares: {
      basePrice: {
        amount: 350.0,
        currencyCode: 'USD'
      },
      taxesPrice: {
        amount: 631.38,
        currencyCode: 'USD'
      },
      totalPrice: {
        amount: 981.38,
        currencyCode: 'USD'
      }
    }
  },
  {
    key: 12345,
    type: 'roundtrip',
    airlegs: [
      {
        departureAirport: {
          name: 'Licenciado Benito Juarez International Airport',
          city: 'Mexico City',
          country: 'mexico',
          iata: 'mex'
        },
        departureDate: '2018-04-05T09:45:00.000-0700',
        arrivalAirport: {
          name: 'Charles De Gaulle International Airport',
          city: 'Paris',
          country: 'france',
          iata: 'cdg'
        },
        arrivalDate: '2018-04-06T06:55:00.000-0700',
        segments: [
          {
            departureAirport: {
              airportName: 'Licenciado Benito Juarez International Airport',
              city: 'Mexico City',
              country: 'mexico',
              iata: 'mex'
            },
            arrivalAirport: {
              airportName: 'Washington Dulles International Airport',
              city: 'Washington',
              country: 'united states',
              iata: 'iad'
            },
            departureDate: '2018-04-05T09:45:00.000-0700',
            arrivalDate: '2018-04-05T15:05:00.000-0700',
            duration: 260,
            airLineMarketingName: 'United Airlines',
            airLineOperationName: 'United Airlines',
            airplaneData: '320',
            cabinTypes: [
              'Economy/Coach'
            ]
          },
          {
            departureAirport: {
              airportName: 'Washington Dulles International Airport',
              city: 'Washington',
              country: 'united states',
              iata: 'iad'
            },
            arrivalAirport: {
              airportName: 'Charles De Gaulle International Airport',
              city: 'Paris',
              country: 'france',
              iata: 'cdg'
            },
            departureDate: '2018-04-05T17:20:00.000-0700',
            arrivalDate: '2018-04-06T06:55:00.000-0700',
            duration: 455,
            airLineMarketingName: 'United Airlines',
            airLineOperationName: 'United Airlines',
            airplaneData: '788',
            cabinTypes: [
              'Economy/Coach'
            ]
          }
        ]
      },
      {
        departureAirport: {
          name: 'Charles De Gaulle International Airport',
          city: 'Paris',
          country: 'france',
          iata: 'cdg'
        },
        departureDate: '2018-04-09T10:30:00.000-0700',
        arrivalAirport: {
          name: 'Licenciado Benito Juarez International Airport',
          city: 'Mexico City',
          country: 'mexico',
          iata: 'mex'
        },
        arrivalDate: '2018-04-09T22:00:00.000-0700',
        segments: [
          {
            departureAirport: {
              airportName: 'Charles De Gaulle International Airport',
              city: 'Paris',
              country: 'france',
              iata: 'cdg'
            },
            arrivalAirport: {
              airportName: 'Frankfurt Am Main International Airport',
              city: 'Frankfurt',
              country: 'germany',
              iata: 'fra'
            },
            departureDate: '2018-04-09T10:30:00.000-0700',
            arrivalDate: '2018-04-09T11:45:00.000-0700',
            duration: 75,
            airLineMarketingName: 'United Airlines',
            airLineOperationName: 'Lufthansa Cargo',
            airplaneData: '319',
            cabinTypes: [
              'Economy/Coach'
            ]
          },
          {
            departureAirport: {
              airportName: 'Frankfurt Am Main International Airport',
              city: 'Frankfurt',
              country: 'germany',
              iata: 'fra'
            },
            arrivalAirport: {
              airportName: 'George Bush Intercontinental Houston Airport',
              city: 'Houston',
              country: 'united states',
              iata: 'iah'
            },
            departureDate: '2018-04-09T13:35:00.000-0700',
            arrivalDate: '2018-04-09T17:40:00.000-0700',
            duration: 665,
            airLineMarketingName: 'United Airlines',
            airLineOperationName: 'United Airlines',
            airplaneData: '777',
            cabinTypes: [
              'Economy/Coach'
            ]
          },
          {
            departureAirport: {
              airportName: 'George Bush Intercontinental Houston Airport',
              city: 'Houston',
              country: 'united states',
              iata: 'iah'
            },
            arrivalAirport: {
              airportName: 'Licenciado Benito Juarez International Airport',
              city: 'Mexico City',
              country: 'mexico',
              iata: 'mex'
            },
            departureDate: '2018-04-09T19:40:00.000-0700',
            arrivalDate: '2018-04-09T22:00:00.000-0700',
            duration: 140,
            airLineMarketingName: 'United Airlines',
            airLineOperationName: 'United Airlines',
            airplaneData: '319',
            cabinTypes: [
              'Economy/Coach'
            ]
          }
        ]
      }
    ],
    fares: {
      basePrice: {
        amount: 537.0,
        currencyCode: 'USD'
      },
      taxesPrice: {
        amount: 634.38,
        currencyCode: 'USD'
      },
      totalPrice: {
        amount: 1171.38,
        currencyCode: 'USD'
      }
    }
  },
  {
    key: 12345,
    type: 'roundtrip',
    airlegs: [
      {
        departureAirport: {
          name: 'Licenciado Benito Juarez International Airport',
          city: 'Mexico City',
          country: 'mexico',
          iata: 'mex'
        },
        departureDate: '2018-04-05T09:45:00.000-0700',
        arrivalAirport: {
          name: 'Charles De Gaulle International Airport',
          city: 'Paris',
          country: 'france',
          iata: 'cdg'
        },
        arrivalDate: '2018-04-06T06:55:00.000-0700',
        segments: [
          {
            departureAirport: {
              airportName: 'Licenciado Benito Juarez International Airport',
              city: 'Mexico City',
              country: 'mexico',
              iata: 'mex'
            },
            arrivalAirport: {
              airportName: 'Washington Dulles International Airport',
              city: 'Washington',
              country: 'united states',
              iata: 'iad'
            },
            departureDate: '2018-04-05T09:45:00.000-0700',
            arrivalDate: '2018-04-05T15:05:00.000-0700',
            duration: 260,
            airLineMarketingName: 'United Airlines',
            airLineOperationName: 'United Airlines',
            airplaneData: '320',
            cabinTypes: [
              'Economy/Coach'
            ]
          },
          {
            departureAirport: {
              airportName: 'Washington Dulles International Airport',
              city: 'Washington',
              country: 'united states',
              iata: 'iad'
            },
            arrivalAirport: {
              airportName: 'Charles De Gaulle International Airport',
              city: 'Paris',
              country: 'france',
              iata: 'cdg'
            },
            departureDate: '2018-04-05T17:20:00.000-0700',
            arrivalDate: '2018-04-06T06:55:00.000-0700',
            duration: 455,
            airLineMarketingName: 'United Airlines',
            airLineOperationName: 'United Airlines',
            airplaneData: '788',
            cabinTypes: [
              'Economy/Coach'
            ]
          }
        ]
      },
      {
        departureAirport: {
          name: 'Charles De Gaulle International Airport',
          city: 'Paris',
          country: 'france',
          iata: 'cdg'
        },
        departureDate: '2018-04-09T09:25:00.000-0700',
        arrivalAirport: {
          name: 'Licenciado Benito Juarez International Airport',
          city: 'Mexico City',
          country: 'mexico',
          iata: 'mex'
        },
        arrivalDate: '2018-04-09T21:05:00.000-0700',
        segments: [
          {
            departureAirport: {
              airportName: 'Charles De Gaulle International Airport',
              city: 'Paris',
              country: 'france',
              iata: 'cdg'
            },
            arrivalAirport: {
              airportName: 'Frankfurt Am Main International Airport',
              city: 'Frankfurt',
              country: 'germany',
              iata: 'fra'
            },
            departureDate: '2018-04-09T09:25:00.000-0700',
            arrivalDate: '2018-04-09T10:40:00.000-0700',
            duration: 75,
            airLineMarketingName: 'United Airlines',
            airLineOperationName: 'Lufthansa Cargo',
            airplaneData: '320',
            cabinTypes: [
              'Economy/Coach'
            ]
          },
          {
            departureAirport: {
              airportName: 'Frankfurt Am Main International Airport',
              city: 'Frankfurt',
              country: 'germany',
              iata: 'fra'
            },
            arrivalAirport: {
              airportName: 'Washington Dulles International Airport',
              city: 'Washington',
              country: 'united states',
              iata: 'iad'
            },
            departureDate: '2018-04-09T12:20:00.000-0700',
            arrivalDate: '2018-04-09T15:05:00.000-0700',
            duration: 525,
            airLineMarketingName: 'United Airlines',
            airLineOperationName: 'United Airlines',
            airplaneData: '777',
            cabinTypes: [
              'Economy/Coach'
            ]
          },
          {
            departureAirport: {
              airportName: 'Washington Dulles International Airport',
              city: 'Washington',
              country: 'united states',
              iata: 'iad'
            },
            arrivalAirport: {
              airportName: 'Licenciado Benito Juarez International Airport',
              city: 'Mexico City',
              country: 'mexico',
              iata: 'mex'
            },
            departureDate: '2018-04-09T17:20:00.000-0700',
            arrivalDate: '2018-04-09T21:05:00.000-0700',
            duration: 285,
            airLineMarketingName: 'United Airlines',
            airLineOperationName: 'United Airlines',
            airplaneData: '738',
            cabinTypes: [
              'Economy/Coach'
            ]
          }
        ]
      }
    ],
    fares: {
      basePrice: {
        amount: 537.0,
        currencyCode: 'USD'
      },
      taxesPrice: {
        amount: 634.38,
        currencyCode: 'USD'
      },
      totalPrice: {
        amount: 1171.38,
        currencyCode: 'USD'
      }
    }
  },
  {
    key: 12345,
    type: 'roundtrip',
    airlegs: [
      {
        departureAirport: {
          name: 'Licenciado Benito Juarez International Airport',
          city: 'Mexico City',
          country: 'mexico',
          iata: 'mex'
        },
        departureDate: '2018-04-05T09:45:00.000-0700',
        arrivalAirport: {
          name: 'Charles De Gaulle International Airport',
          city: 'Paris',
          country: 'france',
          iata: 'cdg'
        },
        arrivalDate: '2018-04-06T06:55:00.000-0700',
        segments: [
          {
            departureAirport: {
              airportName: 'Licenciado Benito Juarez International Airport',
              city: 'Mexico City',
              country: 'mexico',
              iata: 'mex'
            },
            arrivalAirport: {
              airportName: 'Washington Dulles International Airport',
              city: 'Washington',
              country: 'united states',
              iata: 'iad'
            },
            departureDate: '2018-04-05T09:45:00.000-0700',
            arrivalDate: '2018-04-05T15:05:00.000-0700',
            duration: 260,
            airLineMarketingName: 'United Airlines',
            airLineOperationName: 'United Airlines',
            airplaneData: '320',
            cabinTypes: [
              'Economy/Coach'
            ]
          },
          {
            departureAirport: {
              airportName: 'Washington Dulles International Airport',
              city: 'Washington',
              country: 'united states',
              iata: 'iad'
            },
            arrivalAirport: {
              airportName: 'Charles De Gaulle International Airport',
              city: 'Paris',
              country: 'france',
              iata: 'cdg'
            },
            departureDate: '2018-04-05T17:20:00.000-0700',
            arrivalDate: '2018-04-06T06:55:00.000-0700',
            duration: 455,
            airLineMarketingName: 'United Airlines',
            airLineOperationName: 'United Airlines',
            airplaneData: '788',
            cabinTypes: [
              'Economy/Coach'
            ]
          }
        ]
      },
      {
        departureAirport: {
          name: 'Charles De Gaulle International Airport',
          city: 'Paris',
          country: 'france',
          iata: 'cdg'
        },
        departureDate: '2018-04-09T09:25:00.000-0700',
        arrivalAirport: {
          name: 'Licenciado Benito Juarez International Airport',
          city: 'Mexico City',
          country: 'mexico',
          iata: 'mex'
        },
        arrivalDate: '2018-04-09T22:00:00.000-0700',
        segments: [
          {
            departureAirport: {
              airportName: 'Charles De Gaulle International Airport',
              city: 'Paris',
              country: 'france',
              iata: 'cdg'
            },
            arrivalAirport: {
              airportName: 'Frankfurt Am Main International Airport',
              city: 'Frankfurt',
              country: 'germany',
              iata: 'fra'
            },
            departureDate: '2018-04-09T09:25:00.000-0700',
            arrivalDate: '2018-04-09T10:40:00.000-0700',
            duration: 75,
            airLineMarketingName: 'United Airlines',
            airLineOperationName: 'Lufthansa Cargo',
            airplaneData: '320',
            cabinTypes: [
              'Economy/Coach'
            ]
          },
          {
            departureAirport: {
              airportName: 'Frankfurt Am Main International Airport',
              city: 'Frankfurt',
              country: 'germany',
              iata: 'fra'
            },
            arrivalAirport: {
              airportName: 'George Bush Intercontinental Houston Airport',
              city: 'Houston',
              country: 'united states',
              iata: 'iah'
            },
            departureDate: '2018-04-09T13:35:00.000-0700',
            arrivalDate: '2018-04-09T17:40:00.000-0700',
            duration: 665,
            airLineMarketingName: 'United Airlines',
            airLineOperationName: 'United Airlines',
            airplaneData: '777',
            cabinTypes: [
              'Economy/Coach'
            ]
          },
          {
            departureAirport: {
              airportName: 'George Bush Intercontinental Houston Airport',
              city: 'Houston',
              country: 'united states',
              iata: 'iah'
            },
            arrivalAirport: {
              airportName: 'Licenciado Benito Juarez International Airport',
              city: 'Mexico City',
              country: 'mexico',
              iata: 'mex'
            },
            departureDate: '2018-04-09T19:40:00.000-0700',
            arrivalDate: '2018-04-09T22:00:00.000-0700',
            duration: 140,
            airLineMarketingName: 'United Airlines',
            airLineOperationName: 'United Airlines',
            airplaneData: '319',
            cabinTypes: [
              'Economy/Coach'
            ]
          }
        ]
      }
    ],
    fares: {
      basePrice: {
        amount: 537.0,
        currencyCode: 'USD'
      },
      taxesPrice: {
        amount: 634.38,
        currencyCode: 'USD'
      },
      totalPrice: {
        amount: 1171.38,
        currencyCode: 'USD'
      }
    }
  },
  {
    key: 12345,
    type: 'roundtrip',
    airlegs: [
      {
        departureAirport: {
          name: 'Licenciado Benito Juarez International Airport',
          city: 'Mexico City',
          country: 'mexico',
          iata: 'mex'
        },
        departureDate: '2018-04-05T09:45:00.000-0700',
        arrivalAirport: {
          name: 'Charles De Gaulle International Airport',
          city: 'Paris',
          country: 'france',
          iata: 'cdg'
        },
        arrivalDate: '2018-04-06T06:55:00.000-0700',
        segments: [
          {
            departureAirport: {
              airportName: 'Licenciado Benito Juarez International Airport',
              city: 'Mexico City',
              country: 'mexico',
              iata: 'mex'
            },
            arrivalAirport: {
              airportName: 'Washington Dulles International Airport',
              city: 'Washington',
              country: 'united states',
              iata: 'iad'
            },
            departureDate: '2018-04-05T09:45:00.000-0700',
            arrivalDate: '2018-04-05T15:05:00.000-0700',
            duration: 260,
            airLineMarketingName: 'United Airlines',
            airLineOperationName: 'United Airlines',
            airplaneData: '320',
            cabinTypes: [
              'Economy/Coach'
            ]
          },
          {
            departureAirport: {
              airportName: 'Washington Dulles International Airport',
              city: 'Washington',
              country: 'united states',
              iata: 'iad'
            },
            arrivalAirport: {
              airportName: 'Charles De Gaulle International Airport',
              city: 'Paris',
              country: 'france',
              iata: 'cdg'
            },
            departureDate: '2018-04-05T17:20:00.000-0700',
            arrivalDate: '2018-04-06T06:55:00.000-0700',
            duration: 455,
            airLineMarketingName: 'United Airlines',
            airLineOperationName: 'United Airlines',
            airplaneData: '788',
            cabinTypes: [
              'Economy/Coach'
            ]
          }
        ]
      },
      {
        departureAirport: {
          name: 'Charles De Gaulle International Airport',
          city: 'Paris',
          country: 'france',
          iata: 'cdg'
        },
        departureDate: '2018-04-09T10:30:00.000-0700',
        arrivalAirport: {
          name: 'Licenciado Benito Juarez International Airport',
          city: 'Mexico City',
          country: 'mexico',
          iata: 'mex'
        },
        arrivalDate: '2018-04-09T23:25:00.000-0700',
        segments: [
          {
            departureAirport: {
              airportName: 'Charles De Gaulle International Airport',
              city: 'Paris',
              country: 'france',
              iata: 'cdg'
            },
            arrivalAirport: {
              airportName: 'Frankfurt Am Main International Airport',
              city: 'Frankfurt',
              country: 'germany',
              iata: 'fra'
            },
            departureDate: '2018-04-09T10:30:00.000-0700',
            arrivalDate: '2018-04-09T11:45:00.000-0700',
            duration: 75,
            airLineMarketingName: 'United Airlines',
            airLineOperationName: 'Lufthansa Cargo',
            airplaneData: '319',
            cabinTypes: [
              'Economy/Coach'
            ]
          },
          {
            departureAirport: {
              airportName: 'Frankfurt Am Main International Airport',
              city: 'Frankfurt',
              country: 'germany',
              iata: 'fra'
            },
            arrivalAirport: {
              airportName: 'Chicago O Hare International Airport',
              city: 'Chicago',
              country: 'united states',
              iata: 'ord'
            },
            departureDate: '2018-04-09T12:45:00.000-0700',
            arrivalDate: '2018-04-09T15:05:00.000-0700',
            duration: 560,
            airLineMarketingName: 'United Airlines',
            airLineOperationName: 'United Airlines',
            airplaneData: '777',
            cabinTypes: [
              'Economy/Coach'
            ]
          },
          {
            departureAirport: {
              airportName: 'Chicago O Hare International Airport',
              city: 'Chicago',
              country: 'united states',
              iata: 'ord'
            },
            arrivalAirport: {
              airportName: 'Licenciado Benito Juarez International Airport',
              city: 'Mexico City',
              country: 'mexico',
              iata: 'mex'
            },
            departureDate: '2018-04-09T19:20:00.000-0700',
            arrivalDate: '2018-04-09T23:25:00.000-0700',
            duration: 245,
            airLineMarketingName: 'United Airlines',
            airLineOperationName: 'United Airlines',
            airplaneData: '320',
            cabinTypes: [
              'Economy/Coach'
            ]
          }
        ]
      }
    ],
    fares: {
      basePrice: {
        amount: 537.0,
        currencyCode: 'USD'
      },
      taxesPrice: {
        amount: 634.38,
        currencyCode: 'USD'
      },
      totalPrice: {
        amount: 1171.38,
        currencyCode: 'USD'
      }
    }
  },
  {
    key: 12345,
    type: 'roundtrip',
    airlegs: [
      {
        departureAirport: {
          name: 'Licenciado Benito Juarez International Airport',
          city: 'Mexico City',
          country: 'mexico',
          iata: 'mex'
        },
        departureDate: '2018-04-05T09:05:00.000-0700',
        arrivalAirport: {
          name: 'Charles De Gaulle International Airport',
          city: 'Paris',
          country: 'france',
          iata: 'cdg'
        },
        arrivalDate: '2018-04-06T07:45:00.000-0700',
        segments: [
          {
            departureAirport: {
              airportName: 'Licenciado Benito Juarez International Airport',
              city: 'Mexico City',
              country: 'mexico',
              iata: 'mex'
            },
            arrivalAirport: {
              airportName: 'Newark Liberty International Airport',
              city: 'Newark',
              country: 'united states',
              iata: 'ewr'
            },
            departureDate: '2018-04-05T09:05:00.000-0700',
            arrivalDate: '2018-04-05T15:00:00.000-0700',
            duration: 295,
            airLineMarketingName: 'United Airlines',
            airLineOperationName: 'United Airlines',
            airplaneData: '73G',
            cabinTypes: [
              'Economy/Coach'
            ]
          },
          {
            departureAirport: {
              airportName: 'Newark Liberty International Airport',
              city: 'Newark',
              country: 'united states',
              iata: 'ewr'
            },
            arrivalAirport: {
              airportName: 'Charles De Gaulle International Airport',
              city: 'Paris',
              country: 'france',
              iata: 'cdg'
            },
            departureDate: '2018-04-05T18:30:00.000-0700',
            arrivalDate: '2018-04-06T07:45:00.000-0700',
            duration: 435,
            airLineMarketingName: 'United Airlines',
            airLineOperationName: 'United Airlines',
            airplaneData: '777',
            cabinTypes: [
              'Economy/Coach'
            ]
          }
        ]
      },
      {
        departureAirport: {
          name: 'Charles De Gaulle International Airport',
          city: 'Paris',
          country: 'france',
          iata: 'cdg'
        },
        departureDate: '2018-04-09T10:30:00.000-0700',
        arrivalAirport: {
          name: 'Licenciado Benito Juarez International Airport',
          city: 'Mexico City',
          country: 'mexico',
          iata: 'mex'
        },
        arrivalDate: '2018-04-09T22:00:00.000-0700',
        segments: [
          {
            departureAirport: {
              airportName: 'Charles De Gaulle International Airport',
              city: 'Paris',
              country: 'france',
              iata: 'cdg'
            },
            arrivalAirport: {
              airportName: 'Frankfurt Am Main International Airport',
              city: 'Frankfurt',
              country: 'germany',
              iata: 'fra'
            },
            departureDate: '2018-04-09T10:30:00.000-0700',
            arrivalDate: '2018-04-09T11:45:00.000-0700',
            duration: 75,
            airLineMarketingName: 'United Airlines',
            airLineOperationName: 'Lufthansa Cargo',
            airplaneData: '319',
            cabinTypes: [
              'Economy/Coach'
            ]
          },
          {
            departureAirport: {
              airportName: 'Frankfurt Am Main International Airport',
              city: 'Frankfurt',
              country: 'germany',
              iata: 'fra'
            },
            arrivalAirport: {
              airportName: 'George Bush Intercontinental Houston Airport',
              city: 'Houston',
              country: 'united states',
              iata: 'iah'
            },
            departureDate: '2018-04-09T13:35:00.000-0700',
            arrivalDate: '2018-04-09T17:40:00.000-0700',
            duration: 665,
            airLineMarketingName: 'United Airlines',
            airLineOperationName: 'United Airlines',
            airplaneData: '777',
            cabinTypes: [
              'Economy/Coach'
            ]
          },
          {
            departureAirport: {
              airportName: 'George Bush Intercontinental Houston Airport',
              city: 'Houston',
              country: 'united states',
              iata: 'iah'
            },
            arrivalAirport: {
              airportName: 'Licenciado Benito Juarez International Airport',
              city: 'Mexico City',
              country: 'mexico',
              iata: 'mex'
            },
            departureDate: '2018-04-09T19:40:00.000-0700',
            arrivalDate: '2018-04-09T22:00:00.000-0700',
            duration: 140,
            airLineMarketingName: 'United Airlines',
            airLineOperationName: 'United Airlines',
            airplaneData: '319',
            cabinTypes: [
              'Economy/Coach'
            ]
          }
        ]
      }
    ],
    fares: {
      basePrice: {
        amount: 537.0,
        currencyCode: 'USD'
      },
      taxesPrice: {
        amount: 634.38,
        currencyCode: 'USD'
      },
      totalPrice: {
        amount: 1171.38,
        currencyCode: 'USD'
      }
    }
  },
  {
    key: 12345,
    type: 'roundtrip',
    airlegs: [
      {
        departureAirport: {
          name: 'Licenciado Benito Juarez International Airport',
          city: 'Mexico City',
          country: 'mexico',
          iata: 'mex'
        },
        departureDate: '2018-04-05T09:05:00.000-0700',
        arrivalAirport: {
          name: 'Charles De Gaulle International Airport',
          city: 'Paris',
          country: 'france',
          iata: 'cdg'
        },
        arrivalDate: '2018-04-06T07:45:00.000-0700',
        segments: [
          {
            departureAirport: {
              airportName: 'Licenciado Benito Juarez International Airport',
              city: 'Mexico City',
              country: 'mexico',
              iata: 'mex'
            },
            arrivalAirport: {
              airportName: 'Newark Liberty International Airport',
              city: 'Newark',
              country: 'united states',
              iata: 'ewr'
            },
            departureDate: '2018-04-05T09:05:00.000-0700',
            arrivalDate: '2018-04-05T15:00:00.000-0700',
            duration: 295,
            airLineMarketingName: 'United Airlines',
            airLineOperationName: 'United Airlines',
            airplaneData: '73G',
            cabinTypes: [
              'Economy/Coach'
            ]
          },
          {
            departureAirport: {
              airportName: 'Newark Liberty International Airport',
              city: 'Newark',
              country: 'united states',
              iata: 'ewr'
            },
            arrivalAirport: {
              airportName: 'Charles De Gaulle International Airport',
              city: 'Paris',
              country: 'france',
              iata: 'cdg'
            },
            departureDate: '2018-04-05T18:30:00.000-0700',
            arrivalDate: '2018-04-06T07:45:00.000-0700',
            duration: 435,
            airLineMarketingName: 'United Airlines',
            airLineOperationName: 'United Airlines',
            airplaneData: '777',
            cabinTypes: [
              'Economy/Coach'
            ]
          }
        ]
      },
      {
        departureAirport: {
          name: 'Charles De Gaulle International Airport',
          city: 'Paris',
          country: 'france',
          iata: 'cdg'
        },
        departureDate: '2018-04-09T09:25:00.000-0700',
        arrivalAirport: {
          name: 'Licenciado Benito Juarez International Airport',
          city: 'Mexico City',
          country: 'mexico',
          iata: 'mex'
        },
        arrivalDate: '2018-04-09T21:05:00.000-0700',
        segments: [
          {
            departureAirport: {
              airportName: 'Charles De Gaulle International Airport',
              city: 'Paris',
              country: 'france',
              iata: 'cdg'
            },
            arrivalAirport: {
              airportName: 'Frankfurt Am Main International Airport',
              city: 'Frankfurt',
              country: 'germany',
              iata: 'fra'
            },
            departureDate: '2018-04-09T09:25:00.000-0700',
            arrivalDate: '2018-04-09T10:40:00.000-0700',
            duration: 75,
            airLineMarketingName: 'United Airlines',
            airLineOperationName: 'Lufthansa Cargo',
            airplaneData: '320',
            cabinTypes: [
              'Economy/Coach'
            ]
          },
          {
            departureAirport: {
              airportName: 'Frankfurt Am Main International Airport',
              city: 'Frankfurt',
              country: 'germany',
              iata: 'fra'
            },
            arrivalAirport: {
              airportName: 'Washington Dulles International Airport',
              city: 'Washington',
              country: 'united states',
              iata: 'iad'
            },
            departureDate: '2018-04-09T12:20:00.000-0700',
            arrivalDate: '2018-04-09T15:05:00.000-0700',
            duration: 525,
            airLineMarketingName: 'United Airlines',
            airLineOperationName: 'United Airlines',
            airplaneData: '777',
            cabinTypes: [
              'Economy/Coach'
            ]
          },
          {
            departureAirport: {
              airportName: 'Washington Dulles International Airport',
              city: 'Washington',
              country: 'united states',
              iata: 'iad'
            },
            arrivalAirport: {
              airportName: 'Licenciado Benito Juarez International Airport',
              city: 'Mexico City',
              country: 'mexico',
              iata: 'mex'
            },
            departureDate: '2018-04-09T17:20:00.000-0700',
            arrivalDate: '2018-04-09T21:05:00.000-0700',
            duration: 285,
            airLineMarketingName: 'United Airlines',
            airLineOperationName: 'United Airlines',
            airplaneData: '738',
            cabinTypes: [
              'Economy/Coach'
            ]
          }
        ]
      }
    ],
    fares: {
      basePrice: {
        amount: 537.0,
        currencyCode: 'USD'
      },
      taxesPrice: {
        amount: 634.38,
        currencyCode: 'USD'
      },
      totalPrice: {
        amount: 1171.38,
        currencyCode: 'USD'
      }
    }
  },
  {
    key: 12345,
    type: 'roundtrip',
    airlegs: [
      {
        departureAirport: {
          name: 'Licenciado Benito Juarez International Airport',
          city: 'Mexico City',
          country: 'mexico',
          iata: 'mex'
        },
        departureDate: '2018-04-05T09:45:00.000-0700',
        arrivalAirport: {
          name: 'Charles De Gaulle International Airport',
          city: 'Paris',
          country: 'france',
          iata: 'cdg'
        },
        arrivalDate: '2018-04-06T06:55:00.000-0700',
        segments: [
          {
            departureAirport: {
              airportName: 'Licenciado Benito Juarez International Airport',
              city: 'Mexico City',
              country: 'mexico',
              iata: 'mex'
            },
            arrivalAirport: {
              airportName: 'Washington Dulles International Airport',
              city: 'Washington',
              country: 'united states',
              iata: 'iad'
            },
            departureDate: '2018-04-05T09:45:00.000-0700',
            arrivalDate: '2018-04-05T15:05:00.000-0700',
            duration: 260,
            airLineMarketingName: 'United Airlines',
            airLineOperationName: 'United Airlines',
            airplaneData: '320',
            cabinTypes: [
              'Economy/Coach'
            ]
          },
          {
            departureAirport: {
              airportName: 'Washington Dulles International Airport',
              city: 'Washington',
              country: 'united states',
              iata: 'iad'
            },
            arrivalAirport: {
              airportName: 'Charles De Gaulle International Airport',
              city: 'Paris',
              country: 'france',
              iata: 'cdg'
            },
            departureDate: '2018-04-05T17:20:00.000-0700',
            arrivalDate: '2018-04-06T06:55:00.000-0700',
            duration: 455,
            airLineMarketingName: 'United Airlines',
            airLineOperationName: 'United Airlines',
            airplaneData: '788',
            cabinTypes: [
              'Economy/Coach'
            ]
          }
        ]
      },
      {
        departureAirport: {
          name: 'Charles De Gaulle International Airport',
          city: 'Paris',
          country: 'france',
          iata: 'cdg'
        },
        departureDate: '2018-04-09T12:25:00.000-0700',
        arrivalAirport: {
          name: 'Licenciado Benito Juarez International Airport',
          city: 'Mexico City',
          country: 'mexico',
          iata: 'mex'
        },
        arrivalDate: '2018-04-09T21:05:00.000-0700',
        segments: [
          {
            departureAirport: {
              airportName: 'Charles De Gaulle International Airport',
              city: 'Paris',
              country: 'france',
              iata: 'cdg'
            },
            arrivalAirport: {
              airportName: 'Washington Dulles International Airport',
              city: 'Washington',
              country: 'united states',
              iata: 'iad'
            },
            departureDate: '2018-04-09T12:25:00.000-0700',
            arrivalDate: '2018-04-09T14:40:00.000-0700',
            duration: 495,
            airLineMarketingName: 'United Airlines',
            airLineOperationName: 'United Airlines',
            airplaneData: '788',
            cabinTypes: [
              'Economy/Coach'
            ]
          },
          {
            departureAirport: {
              airportName: 'Washington Dulles International Airport',
              city: 'Washington',
              country: 'united states',
              iata: 'iad'
            },
            arrivalAirport: {
              airportName: 'Licenciado Benito Juarez International Airport',
              city: 'Mexico City',
              country: 'mexico',
              iata: 'mex'
            },
            departureDate: '2018-04-09T17:20:00.000-0700',
            arrivalDate: '2018-04-09T21:05:00.000-0700',
            duration: 285,
            airLineMarketingName: 'United Airlines',
            airLineOperationName: 'United Airlines',
            airplaneData: '738',
            cabinTypes: [
              'Economy/Coach'
            ]
          }
        ]
      }
    ],
    fares: {
      basePrice: {
        amount: 659.0,
        currencyCode: 'USD'
      },
      taxesPrice: {
        amount: 622.58,
        currencyCode: 'USD'
      },
      totalPrice: {
        amount: 1281.58,
        currencyCode: 'USD'
      }
    }
  },
  {
    key: 12345,
    type: 'roundtrip',
    airlegs: [
      {
        departureAirport: {
          name: 'Licenciado Benito Juarez International Airport',
          city: 'Mexico City',
          country: 'mexico',
          iata: 'mex'
        },
        departureDate: '2018-04-05T09:05:00.000-0700',
        arrivalAirport: {
          name: 'Charles De Gaulle International Airport',
          city: 'Paris',
          country: 'france',
          iata: 'cdg'
        },
        arrivalDate: '2018-04-06T07:45:00.000-0700',
        segments: [
          {
            departureAirport: {
              airportName: 'Licenciado Benito Juarez International Airport',
              city: 'Mexico City',
              country: 'mexico',
              iata: 'mex'
            },
            arrivalAirport: {
              airportName: 'Newark Liberty International Airport',
              city: 'Newark',
              country: 'united states',
              iata: 'ewr'
            },
            departureDate: '2018-04-05T09:05:00.000-0700',
            arrivalDate: '2018-04-05T15:00:00.000-0700',
            duration: 295,
            airLineMarketingName: 'United Airlines',
            airLineOperationName: 'United Airlines',
            airplaneData: '73G',
            cabinTypes: [
              'Economy/Coach'
            ]
          },
          {
            departureAirport: {
              airportName: 'Newark Liberty International Airport',
              city: 'Newark',
              country: 'united states',
              iata: 'ewr'
            },
            arrivalAirport: {
              airportName: 'Charles De Gaulle International Airport',
              city: 'Paris',
              country: 'france',
              iata: 'cdg'
            },
            departureDate: '2018-04-05T18:30:00.000-0700',
            arrivalDate: '2018-04-06T07:45:00.000-0700',
            duration: 435,
            airLineMarketingName: 'United Airlines',
            airLineOperationName: 'United Airlines',
            airplaneData: '777',
            cabinTypes: [
              'Economy/Coach'
            ]
          }
        ]
      },
      {
        departureAirport: {
          name: 'Charles De Gaulle International Airport',
          city: 'Paris',
          country: 'france',
          iata: 'cdg'
        },
        departureDate: '2018-04-09T12:25:00.000-0700',
        arrivalAirport: {
          name: 'Licenciado Benito Juarez International Airport',
          city: 'Mexico City',
          country: 'mexico',
          iata: 'mex'
        },
        arrivalDate: '2018-04-09T21:05:00.000-0700',
        segments: [
          {
            departureAirport: {
              airportName: 'Charles De Gaulle International Airport',
              city: 'Paris',
              country: 'france',
              iata: 'cdg'
            },
            arrivalAirport: {
              airportName: 'Washington Dulles International Airport',
              city: 'Washington',
              country: 'united states',
              iata: 'iad'
            },
            departureDate: '2018-04-09T12:25:00.000-0700',
            arrivalDate: '2018-04-09T14:40:00.000-0700',
            duration: 495,
            airLineMarketingName: 'United Airlines',
            airLineOperationName: 'United Airlines',
            airplaneData: '788',
            cabinTypes: [
              'Economy/Coach'
            ]
          },
          {
            departureAirport: {
              airportName: 'Washington Dulles International Airport',
              city: 'Washington',
              country: 'united states',
              iata: 'iad'
            },
            arrivalAirport: {
              airportName: 'Licenciado Benito Juarez International Airport',
              city: 'Mexico City',
              country: 'mexico',
              iata: 'mex'
            },
            departureDate: '2018-04-09T17:20:00.000-0700',
            arrivalDate: '2018-04-09T21:05:00.000-0700',
            duration: 285,
            airLineMarketingName: 'United Airlines',
            airLineOperationName: 'United Airlines',
            airplaneData: '738',
            cabinTypes: [
              'Economy/Coach'
            ]
          }
        ]
      }
    ],
    fares: {
      basePrice: {
        amount: 659.0,
        currencyCode: 'USD'
      },
      taxesPrice: {
        amount: 622.58,
        currencyCode: 'USD'
      },
      totalPrice: {
        amount: 1281.58,
        currencyCode: 'USD'
      }
    }
  },
  {
    key: 12345,
    type: 'roundtrip',
    airlegs: [
      {
        departureAirport: {
          name: 'Licenciado Benito Juarez International Airport',
          city: 'Mexico City',
          country: 'mexico',
          iata: 'mex'
        },
        departureDate: '2018-04-05T09:45:00.000-0700',
        arrivalAirport: {
          name: 'Charles De Gaulle International Airport',
          city: 'Paris',
          country: 'france',
          iata: 'cdg'
        },
        arrivalDate: '2018-04-06T06:55:00.000-0700',
        segments: [
          {
            departureAirport: {
              airportName: 'Licenciado Benito Juarez International Airport',
              city: 'Mexico City',
              country: 'mexico',
              iata: 'mex'
            },
            arrivalAirport: {
              airportName: 'Washington Dulles International Airport',
              city: 'Washington',
              country: 'united states',
              iata: 'iad'
            },
            departureDate: '2018-04-05T09:45:00.000-0700',
            arrivalDate: '2018-04-05T15:05:00.000-0700',
            duration: 260,
            airLineMarketingName: 'United Airlines',
            airLineOperationName: 'United Airlines',
            airplaneData: '320',
            cabinTypes: [
              'Economy/Coach'
            ]
          },
          {
            departureAirport: {
              airportName: 'Washington Dulles International Airport',
              city: 'Washington',
              country: 'united states',
              iata: 'iad'
            },
            arrivalAirport: {
              airportName: 'Charles De Gaulle International Airport',
              city: 'Paris',
              country: 'france',
              iata: 'cdg'
            },
            departureDate: '2018-04-05T17:20:00.000-0700',
            arrivalDate: '2018-04-06T06:55:00.000-0700',
            duration: 455,
            airLineMarketingName: 'United Airlines',
            airLineOperationName: 'United Airlines',
            airplaneData: '788',
            cabinTypes: [
              'Economy/Coach'
            ]
          }
        ]
      },
      {
        departureAirport: {
          name: 'Charles De Gaulle International Airport',
          city: 'Paris',
          country: 'france',
          iata: 'cdg'
        },
        departureDate: '2018-04-09T09:45:00.000-0700',
        arrivalAirport: {
          name: 'Licenciado Benito Juarez International Airport',
          city: 'Mexico City',
          country: 'mexico',
          iata: 'mex'
        },
        arrivalDate: '2018-04-09T21:25:00.000-0700',
        segments: [
          {
            departureAirport: {
              airportName: 'Charles De Gaulle International Airport',
              city: 'Paris',
              country: 'france',
              iata: 'cdg'
            },
            arrivalAirport: {
              airportName: 'Newark Liberty International Airport',
              city: 'Newark',
              country: 'united states',
              iata: 'ewr'
            },
            departureDate: '2018-04-09T09:45:00.000-0700',
            arrivalDate: '2018-04-09T11:55:00.000-0700',
            duration: 490,
            airLineMarketingName: 'United Airlines',
            airLineOperationName: 'United Airlines',
            airplaneData: '777',
            cabinTypes: [
              'Economy/Coach'
            ]
          },
          {
            departureAirport: {
              airportName: 'Newark Liberty International Airport',
              city: 'Newark',
              country: 'united states',
              iata: 'ewr'
            },
            arrivalAirport: {
              airportName: 'Licenciado Benito Juarez International Airport',
              city: 'Mexico City',
              country: 'mexico',
              iata: 'mex'
            },
            departureDate: '2018-04-09T17:00:00.000-0700',
            arrivalDate: '2018-04-09T21:25:00.000-0700',
            duration: 325,
            airLineMarketingName: 'United Airlines',
            airLineOperationName: 'United Airlines',
            airplaneData: '73G',
            cabinTypes: [
              'Economy/Coach'
            ]
          }
        ]
      }
    ],
    fares: {
      basePrice: {
        amount: 659.0,
        currencyCode: 'USD'
      },
      taxesPrice: {
        amount: 622.58,
        currencyCode: 'USD'
      },
      totalPrice: {
        amount: 1281.58,
        currencyCode: 'USD'
      }
    }
  },
  {
    key: 12345,
    type: 'roundtrip',
    airlegs: [
      {
        departureAirport: {
          name: 'Licenciado Benito Juarez International Airport',
          city: 'Mexico City',
          country: 'mexico',
          iata: 'mex'
        },
        departureDate: '2018-04-05T09:45:00.000-0700',
        arrivalAirport: {
          name: 'Charles De Gaulle International Airport',
          city: 'Paris',
          country: 'france',
          iata: 'cdg'
        },
        arrivalDate: '2018-04-06T06:55:00.000-0700',
        segments: [
          {
            departureAirport: {
              airportName: 'Licenciado Benito Juarez International Airport',
              city: 'Mexico City',
              country: 'mexico',
              iata: 'mex'
            },
            arrivalAirport: {
              airportName: 'Washington Dulles International Airport',
              city: 'Washington',
              country: 'united states',
              iata: 'iad'
            },
            departureDate: '2018-04-05T09:45:00.000-0700',
            arrivalDate: '2018-04-05T15:05:00.000-0700',
            duration: 260,
            airLineMarketingName: 'United Airlines',
            airLineOperationName: 'United Airlines',
            airplaneData: '320',
            cabinTypes: [
              'Economy/Coach'
            ]
          },
          {
            departureAirport: {
              airportName: 'Washington Dulles International Airport',
              city: 'Washington',
              country: 'united states',
              iata: 'iad'
            },
            arrivalAirport: {
              airportName: 'Charles De Gaulle International Airport',
              city: 'Paris',
              country: 'france',
              iata: 'cdg'
            },
            departureDate: '2018-04-05T17:20:00.000-0700',
            arrivalDate: '2018-04-06T06:55:00.000-0700',
            duration: 455,
            airLineMarketingName: 'United Airlines',
            airLineOperationName: 'United Airlines',
            airplaneData: '788',
            cabinTypes: [
              'Economy/Coach'
            ]
          }
        ]
      },
      {
        departureAirport: {
          name: 'Charles De Gaulle International Airport',
          city: 'Paris',
          country: 'france',
          iata: 'cdg'
        },
        departureDate: '2018-04-09T11:15:00.000-0700',
        arrivalAirport: {
          name: 'Licenciado Benito Juarez International Airport',
          city: 'Mexico City',
          country: 'mexico',
          iata: 'mex'
        },
        arrivalDate: '2018-04-09T23:25:00.000-0700',
        segments: [
          {
            departureAirport: {
              airportName: 'Charles De Gaulle International Airport',
              city: 'Paris',
              country: 'france',
              iata: 'cdg'
            },
            arrivalAirport: {
              airportName: 'Chicago O Hare International Airport',
              city: 'Chicago',
              country: 'united states',
              iata: 'ord'
            },
            departureDate: '2018-04-09T11:15:00.000-0700',
            arrivalDate: '2018-04-09T13:40:00.000-0700',
            duration: 565,
            airLineMarketingName: 'United Airlines',
            airLineOperationName: 'United Airlines',
            airplaneData: '763',
            cabinTypes: [
              'Economy/Coach'
            ]
          },
          {
            departureAirport: {
              airportName: 'Chicago O Hare International Airport',
              city: 'Chicago',
              country: 'united states',
              iata: 'ord'
            },
            arrivalAirport: {
              airportName: 'Licenciado Benito Juarez International Airport',
              city: 'Mexico City',
              country: 'mexico',
              iata: 'mex'
            },
            departureDate: '2018-04-09T19:20:00.000-0700',
            arrivalDate: '2018-04-09T23:25:00.000-0700',
            duration: 245,
            airLineMarketingName: 'United Airlines',
            airLineOperationName: 'United Airlines',
            airplaneData: '320',
            cabinTypes: [
              'Economy/Coach'
            ]
          }
        ]
      }
    ],
    fares: {
      basePrice: {
        amount: 659.0,
        currencyCode: 'USD'
      },
      taxesPrice: {
        amount: 622.58,
        currencyCode: 'USD'
      },
      totalPrice: {
        amount: 1281.58,
        currencyCode: 'USD'
      }
    }
  },
  {
    key: 12345,
    type: 'roundtrip',
    airlegs: [
      {
        departureAirport: {
          name: 'Licenciado Benito Juarez International Airport',
          city: 'Mexico City',
          country: 'mexico',
          iata: 'mex'
        },
        departureDate: '2018-04-05T08:25:00.000-0700',
        arrivalAirport: {
          name: 'Charles De Gaulle International Airport',
          city: 'Paris',
          country: 'france',
          iata: 'cdg'
        },
        arrivalDate: '2018-04-06T09:30:00.000-0700',
        segments: [
          {
            departureAirport: {
              airportName: 'Licenciado Benito Juarez International Airport',
              city: 'Mexico City',
              country: 'mexico',
              iata: 'mex'
            },
            arrivalAirport: {
              airportName: 'Chicago O Hare International Airport',
              city: 'Chicago',
              country: 'united states',
              iata: 'ord'
            },
            departureDate: '2018-04-05T08:25:00.000-0700',
            arrivalDate: '2018-04-05T12:45:00.000-0700',
            duration: 260,
            airLineMarketingName: 'United Airlines',
            airLineOperationName: 'United Airlines',
            airplaneData: '320',
            cabinTypes: [
              'Economy/Coach'
            ]
          },
          {
            departureAirport: {
              airportName: 'Chicago O Hare International Airport',
              city: 'Chicago',
              country: 'united states',
              iata: 'ord'
            },
            arrivalAirport: {
              airportName: 'Charles De Gaulle International Airport',
              city: 'Paris',
              country: 'france',
              iata: 'cdg'
            },
            departureDate: '2018-04-05T18:00:00.000-0700',
            arrivalDate: '2018-04-06T09:30:00.000-0700',
            duration: 510,
            airLineMarketingName: 'United Airlines',
            airLineOperationName: 'United Airlines',
            airplaneData: '763',
            cabinTypes: [
              'Economy/Coach'
            ]
          }
        ]
      },
      {
        departureAirport: {
          name: 'Charles De Gaulle International Airport',
          city: 'Paris',
          country: 'france',
          iata: 'cdg'
        },
        departureDate: '2018-04-09T12:25:00.000-0700',
        arrivalAirport: {
          name: 'Licenciado Benito Juarez International Airport',
          city: 'Mexico City',
          country: 'mexico',
          iata: 'mex'
        },
        arrivalDate: '2018-04-09T21:05:00.000-0700',
        segments: [
          {
            departureAirport: {
              airportName: 'Charles De Gaulle International Airport',
              city: 'Paris',
              country: 'france',
              iata: 'cdg'
            },
            arrivalAirport: {
              airportName: 'Washington Dulles International Airport',
              city: 'Washington',
              country: 'united states',
              iata: 'iad'
            },
            departureDate: '2018-04-09T12:25:00.000-0700',
            arrivalDate: '2018-04-09T14:40:00.000-0700',
            duration: 495,
            airLineMarketingName: 'United Airlines',
            airLineOperationName: 'United Airlines',
            airplaneData: '788',
            cabinTypes: [
              'Economy/Coach'
            ]
          },
          {
            departureAirport: {
              airportName: 'Washington Dulles International Airport',
              city: 'Washington',
              country: 'united states',
              iata: 'iad'
            },
            arrivalAirport: {
              airportName: 'Licenciado Benito Juarez International Airport',
              city: 'Mexico City',
              country: 'mexico',
              iata: 'mex'
            },
            departureDate: '2018-04-09T17:20:00.000-0700',
            arrivalDate: '2018-04-09T21:05:00.000-0700',
            duration: 285,
            airLineMarketingName: 'United Airlines',
            airLineOperationName: 'United Airlines',
            airplaneData: '738',
            cabinTypes: [
              'Economy/Coach'
            ]
          }
        ]
      }
    ],
    fares: {
      basePrice: {
        amount: 659.0,
        currencyCode: 'USD'
      },
      taxesPrice: {
        amount: 622.58,
        currencyCode: 'USD'
      },
      totalPrice: {
        amount: 1281.58,
        currencyCode: 'USD'
      }
    }
  },
  {
    key: 12345,
    type: 'roundtrip',
    airlegs: [
      {
        departureAirport: {
          name: 'Licenciado Benito Juarez International Airport',
          city: 'Mexico City',
          country: 'mexico',
          iata: 'mex'
        },
        departureDate: '2018-04-05T09:05:00.000-0700',
        arrivalAirport: {
          name: 'Charles De Gaulle International Airport',
          city: 'Paris',
          country: 'france',
          iata: 'cdg'
        },
        arrivalDate: '2018-04-06T07:45:00.000-0700',
        segments: [
          {
            departureAirport: {
              airportName: 'Licenciado Benito Juarez International Airport',
              city: 'Mexico City',
              country: 'mexico',
              iata: 'mex'
            },
            arrivalAirport: {
              airportName: 'Newark Liberty International Airport',
              city: 'Newark',
              country: 'united states',
              iata: 'ewr'
            },
            departureDate: '2018-04-05T09:05:00.000-0700',
            arrivalDate: '2018-04-05T15:00:00.000-0700',
            duration: 295,
            airLineMarketingName: 'United Airlines',
            airLineOperationName: 'United Airlines',
            airplaneData: '73G',
            cabinTypes: [
              'Economy/Coach'
            ]
          },
          {
            departureAirport: {
              airportName: 'Newark Liberty International Airport',
              city: 'Newark',
              country: 'united states',
              iata: 'ewr'
            },
            arrivalAirport: {
              airportName: 'Charles De Gaulle International Airport',
              city: 'Paris',
              country: 'france',
              iata: 'cdg'
            },
            departureDate: '2018-04-05T18:30:00.000-0700',
            arrivalDate: '2018-04-06T07:45:00.000-0700',
            duration: 435,
            airLineMarketingName: 'United Airlines',
            airLineOperationName: 'United Airlines',
            airplaneData: '777',
            cabinTypes: [
              'Economy/Coach'
            ]
          }
        ]
      },
      {
        departureAirport: {
          name: 'Charles De Gaulle International Airport',
          city: 'Paris',
          country: 'france',
          iata: 'cdg'
        },
        departureDate: '2018-04-09T09:45:00.000-0700',
        arrivalAirport: {
          name: 'Licenciado Benito Juarez International Airport',
          city: 'Mexico City',
          country: 'mexico',
          iata: 'mex'
        },
        arrivalDate: '2018-04-09T21:25:00.000-0700',
        segments: [
          {
            departureAirport: {
              airportName: 'Charles De Gaulle International Airport',
              city: 'Paris',
              country: 'france',
              iata: 'cdg'
            },
            arrivalAirport: {
              airportName: 'Newark Liberty International Airport',
              city: 'Newark',
              country: 'united states',
              iata: 'ewr'
            },
            departureDate: '2018-04-09T09:45:00.000-0700',
            arrivalDate: '2018-04-09T11:55:00.000-0700',
            duration: 490,
            airLineMarketingName: 'United Airlines',
            airLineOperationName: 'United Airlines',
            airplaneData: '777',
            cabinTypes: [
              'Economy/Coach'
            ]
          },
          {
            departureAirport: {
              airportName: 'Newark Liberty International Airport',
              city: 'Newark',
              country: 'united states',
              iata: 'ewr'
            },
            arrivalAirport: {
              airportName: 'Licenciado Benito Juarez International Airport',
              city: 'Mexico City',
              country: 'mexico',
              iata: 'mex'
            },
            departureDate: '2018-04-09T17:00:00.000-0700',
            arrivalDate: '2018-04-09T21:25:00.000-0700',
            duration: 325,
            airLineMarketingName: 'United Airlines',
            airLineOperationName: 'United Airlines',
            airplaneData: '73G',
            cabinTypes: [
              'Economy/Coach'
            ]
          }
        ]
      }
    ],
    fares: {
      basePrice: {
        amount: 659.0,
        currencyCode: 'USD'
      },
      taxesPrice: {
        amount: 622.58,
        currencyCode: 'USD'
      },
      totalPrice: {
        amount: 1281.58,
        currencyCode: 'USD'
      }
    }
  },
  {
    key: 12345,
    type: 'roundtrip',
    airlegs: [
      {
        departureAirport: {
          name: 'Licenciado Benito Juarez International Airport',
          city: 'Mexico City',
          country: 'mexico',
          iata: 'mex'
        },
        departureDate: '2018-04-05T07:30:00.000-0700',
        arrivalAirport: {
          name: 'Charles De Gaulle International Airport',
          city: 'Paris',
          country: 'france',
          iata: 'cdg'
        },
        arrivalDate: '2018-04-06T08:45:00.000-0700',
        segments: [
          {
            departureAirport: {
              airportName: 'Licenciado Benito Juarez International Airport',
              city: 'Mexico City',
              country: 'mexico',
              iata: 'mex'
            },
            arrivalAirport: {
              airportName: 'George Bush Intercontinental Houston Airport',
              city: 'Houston',
              country: 'united states',
              iata: 'iah'
            },
            departureDate: '2018-04-05T07:30:00.000-0700',
            arrivalDate: '2018-04-05T09:49:00.000-0700',
            duration: 139,
            airLineMarketingName: 'United Airlines',
            airLineOperationName: 'United Airlines',
            airplaneData: '319',
            cabinTypes: [
              'Economy/Coach'
            ]
          },
          {
            departureAirport: {
              airportName: 'George Bush Intercontinental Houston Airport',
              city: 'Houston',
              country: 'united states',
              iata: 'iah'
            },
            arrivalAirport: {
              airportName: 'Lester B. Pearson International Airport',
              city: 'Toronto',
              country: 'canada',
              iata: 'yyz'
            },
            departureDate: '2018-04-05T12:25:00.000-0700',
            arrivalDate: '2018-04-05T16:40:00.000-0700',
            duration: 195,
            airLineMarketingName: 'United Airlines',
            airLineOperationName: 'United Airlines',
            airplaneData: 'E7W',
            cabinTypes: [
              'Economy/Coach'
            ]
          },
          {
            departureAirport: {
              airportName: 'Lester B. Pearson International Airport',
              city: 'Toronto',
              country: 'canada',
              iata: 'yyz'
            },
            arrivalAirport: {
              airportName: 'Charles De Gaulle International Airport',
              city: 'Paris',
              country: 'france',
              iata: 'cdg'
            },
            departureDate: '2018-04-05T19:35:00.000-0700',
            arrivalDate: '2018-04-06T08:45:00.000-0700',
            duration: 430,
            airLineMarketingName: 'United Airlines',
            airLineOperationName: 'Air Canada',
            airplaneData: '77W',
            cabinTypes: [
              'Economy/Coach'
            ]
          }
        ]
      },
      {
        departureAirport: {
          name: 'Charles De Gaulle International Airport',
          city: 'Paris',
          country: 'france',
          iata: 'cdg'
        },
        departureDate: '2018-04-09T12:25:00.000-0700',
        arrivalAirport: {
          name: 'Licenciado Benito Juarez International Airport',
          city: 'Mexico City',
          country: 'mexico',
          iata: 'mex'
        },
        arrivalDate: '2018-04-09T21:05:00.000-0700',
        segments: [
          {
            departureAirport: {
              airportName: 'Charles De Gaulle International Airport',
              city: 'Paris',
              country: 'france',
              iata: 'cdg'
            },
            arrivalAirport: {
              airportName: 'Washington Dulles International Airport',
              city: 'Washington',
              country: 'united states',
              iata: 'iad'
            },
            departureDate: '2018-04-09T12:25:00.000-0700',
            arrivalDate: '2018-04-09T14:40:00.000-0700',
            duration: 495,
            airLineMarketingName: 'United Airlines',
            airLineOperationName: 'United Airlines',
            airplaneData: '788',
            cabinTypes: [
              'Economy/Coach'
            ]
          },
          {
            departureAirport: {
              airportName: 'Washington Dulles International Airport',
              city: 'Washington',
              country: 'united states',
              iata: 'iad'
            },
            arrivalAirport: {
              airportName: 'Licenciado Benito Juarez International Airport',
              city: 'Mexico City',
              country: 'mexico',
              iata: 'mex'
            },
            departureDate: '2018-04-09T17:20:00.000-0700',
            arrivalDate: '2018-04-09T21:05:00.000-0700',
            duration: 285,
            airLineMarketingName: 'United Airlines',
            airLineOperationName: 'United Airlines',
            airplaneData: '738',
            cabinTypes: [
              'Economy/Coach'
            ]
          }
        ]
      }
    ],
    fares: {
      basePrice: {
        amount: 659.0,
        currencyCode: 'USD'
      },
      taxesPrice: {
        amount: 626.08,
        currencyCode: 'USD'
      },
      totalPrice: {
        amount: 1285.08,
        currencyCode: 'USD'
      }
    }
  },
  {
    key: 12345,
    type: 'roundtrip',
    airlegs: [
      {
        departureAirport: {
          name: 'Licenciado Benito Juarez International Airport',
          city: 'Mexico City',
          country: 'mexico',
          iata: 'mex'
        },
        departureDate: '2018-04-05T07:30:00.000-0700',
        arrivalAirport: {
          name: 'Charles De Gaulle International Airport',
          city: 'Paris',
          country: 'france',
          iata: 'cdg'
        },
        arrivalDate: '2018-04-06T06:55:00.000-0700',
        segments: [
          {
            departureAirport: {
              airportName: 'Licenciado Benito Juarez International Airport',
              city: 'Mexico City',
              country: 'mexico',
              iata: 'mex'
            },
            arrivalAirport: {
              airportName: 'George Bush Intercontinental Houston Airport',
              city: 'Houston',
              country: 'united states',
              iata: 'iah'
            },
            departureDate: '2018-04-05T07:30:00.000-0700',
            arrivalDate: '2018-04-05T09:49:00.000-0700',
            duration: 139,
            airLineMarketingName: 'United Airlines',
            airLineOperationName: 'United Airlines',
            airplaneData: '319',
            cabinTypes: [
              'Economy/Coach'
            ]
          },
          {
            departureAirport: {
              airportName: 'George Bush Intercontinental Houston Airport',
              city: 'Houston',
              country: 'united states',
              iata: 'iah'
            },
            arrivalAirport: {
              airportName: 'Washington Dulles International Airport',
              city: 'Washington',
              country: 'united states',
              iata: 'iad'
            },
            departureDate: '2018-04-05T12:05:00.000-0700',
            arrivalDate: '2018-04-05T16:02:00.000-0700',
            duration: 177,
            airLineMarketingName: 'United Airlines',
            airLineOperationName: 'United Airlines',
            airplaneData: '763',
            cabinTypes: [
              'Economy/Coach'
            ]
          },
          {
            departureAirport: {
              airportName: 'Washington Dulles International Airport',
              city: 'Washington',
              country: 'united states',
              iata: 'iad'
            },
            arrivalAirport: {
              airportName: 'Charles De Gaulle International Airport',
              city: 'Paris',
              country: 'france',
              iata: 'cdg'
            },
            departureDate: '2018-04-05T17:20:00.000-0700',
            arrivalDate: '2018-04-06T06:55:00.000-0700',
            duration: 455,
            airLineMarketingName: 'United Airlines',
            airLineOperationName: 'United Airlines',
            airplaneData: '788',
            cabinTypes: [
              'Economy/Coach'
            ]
          }
        ]
      },
      {
        departureAirport: {
          name: 'Charles De Gaulle International Airport',
          city: 'Paris',
          country: 'france',
          iata: 'cdg'
        },
        departureDate: '2018-04-09T12:25:00.000-0700',
        arrivalAirport: {
          name: 'Licenciado Benito Juarez International Airport',
          city: 'Mexico City',
          country: 'mexico',
          iata: 'mex'
        },
        arrivalDate: '2018-04-09T21:05:00.000-0700',
        segments: [
          {
            departureAirport: {
              airportName: 'Charles De Gaulle International Airport',
              city: 'Paris',
              country: 'france',
              iata: 'cdg'
            },
            arrivalAirport: {
              airportName: 'Washington Dulles International Airport',
              city: 'Washington',
              country: 'united states',
              iata: 'iad'
            },
            departureDate: '2018-04-09T12:25:00.000-0700',
            arrivalDate: '2018-04-09T14:40:00.000-0700',
            duration: 495,
            airLineMarketingName: 'United Airlines',
            airLineOperationName: 'United Airlines',
            airplaneData: '788',
            cabinTypes: [
              'Economy/Coach'
            ]
          },
          {
            departureAirport: {
              airportName: 'Washington Dulles International Airport',
              city: 'Washington',
              country: 'united states',
              iata: 'iad'
            },
            arrivalAirport: {
              airportName: 'Licenciado Benito Juarez International Airport',
              city: 'Mexico City',
              country: 'mexico',
              iata: 'mex'
            },
            departureDate: '2018-04-09T17:20:00.000-0700',
            arrivalDate: '2018-04-09T21:05:00.000-0700',
            duration: 285,
            airLineMarketingName: 'United Airlines',
            airLineOperationName: 'United Airlines',
            airplaneData: '738',
            cabinTypes: [
              'Economy/Coach'
            ]
          }
        ]
      }
    ],
    fares: {
      basePrice: {
        amount: 659.0,
        currencyCode: 'USD'
      },
      taxesPrice: {
        amount: 627.08,
        currencyCode: 'USD'
      },
      totalPrice: {
        amount: 1286.08,
        currencyCode: 'USD'
      }
    }
  },
  {
    key: 12345,
    type: 'roundtrip',
    airlegs: [
      {
        departureAirport: {
          name: 'Licenciado Benito Juarez International Airport',
          city: 'Mexico City',
          country: 'mexico',
          iata: 'mex'
        },
        departureDate: '2018-04-05T09:45:00.000-0700',
        arrivalAirport: {
          name: 'Charles De Gaulle International Airport',
          city: 'Paris',
          country: 'france',
          iata: 'cdg'
        },
        arrivalDate: '2018-04-06T06:55:00.000-0700',
        segments: [
          {
            departureAirport: {
              airportName: 'Licenciado Benito Juarez International Airport',
              city: 'Mexico City',
              country: 'mexico',
              iata: 'mex'
            },
            arrivalAirport: {
              airportName: 'Washington Dulles International Airport',
              city: 'Washington',
              country: 'united states',
              iata: 'iad'
            },
            departureDate: '2018-04-05T09:45:00.000-0700',
            arrivalDate: '2018-04-05T15:05:00.000-0700',
            duration: 260,
            airLineMarketingName: 'United Airlines',
            airLineOperationName: 'United Airlines',
            airplaneData: '320',
            cabinTypes: [
              'Economy/Coach'
            ]
          },
          {
            departureAirport: {
              airportName: 'Washington Dulles International Airport',
              city: 'Washington',
              country: 'united states',
              iata: 'iad'
            },
            arrivalAirport: {
              airportName: 'Charles De Gaulle International Airport',
              city: 'Paris',
              country: 'france',
              iata: 'cdg'
            },
            departureDate: '2018-04-05T17:20:00.000-0700',
            arrivalDate: '2018-04-06T06:55:00.000-0700',
            duration: 455,
            airLineMarketingName: 'United Airlines',
            airLineOperationName: 'United Airlines',
            airplaneData: '788',
            cabinTypes: [
              'Economy/Coach'
            ]
          }
        ]
      },
      {
        departureAirport: {
          name: 'Charles De Gaulle International Airport',
          city: 'Paris',
          country: 'france',
          iata: 'cdg'
        },
        departureDate: '2018-04-09T09:45:00.000-0700',
        arrivalAirport: {
          name: 'Licenciado Benito Juarez International Airport',
          city: 'Mexico City',
          country: 'mexico',
          iata: 'mex'
        },
        arrivalDate: '2018-04-09T21:05:00.000-0700',
        segments: [
          {
            departureAirport: {
              airportName: 'Charles De Gaulle International Airport',
              city: 'Paris',
              country: 'france',
              iata: 'cdg'
            },
            arrivalAirport: {
              airportName: 'Newark Liberty International Airport',
              city: 'Newark',
              country: 'united states',
              iata: 'ewr'
            },
            departureDate: '2018-04-09T09:45:00.000-0700',
            arrivalDate: '2018-04-09T11:55:00.000-0700',
            duration: 490,
            airLineMarketingName: 'United Airlines',
            airLineOperationName: 'United Airlines',
            airplaneData: '777',
            cabinTypes: [
              'Economy/Coach'
            ]
          },
          {
            departureAirport: {
              airportName: 'Newark Liberty International Airport',
              city: 'Newark',
              country: 'united states',
              iata: 'ewr'
            },
            arrivalAirport: {
              airportName: 'Washington Dulles International Airport',
              city: 'Washington',
              country: 'united states',
              iata: 'iad'
            },
            departureDate: '2018-04-09T15:09:00.000-0700',
            arrivalDate: '2018-04-09T16:33:00.000-0700',
            duration: 84,
            airLineMarketingName: 'United Airlines',
            airLineOperationName: 'United Airlines',
            airplaneData: '320',
            cabinTypes: [
              'Economy/Coach'
            ]
          },
          {
            departureAirport: {
              airportName: 'Washington Dulles International Airport',
              city: 'Washington',
              country: 'united states',
              iata: 'iad'
            },
            arrivalAirport: {
              airportName: 'Licenciado Benito Juarez International Airport',
              city: 'Mexico City',
              country: 'mexico',
              iata: 'mex'
            },
            departureDate: '2018-04-09T17:20:00.000-0700',
            arrivalDate: '2018-04-09T21:05:00.000-0700',
            duration: 285,
            airLineMarketingName: 'United Airlines',
            airLineOperationName: 'United Airlines',
            airplaneData: '738',
            cabinTypes: [
              'Economy/Coach'
            ]
          }
        ]
      }
    ],
    fares: {
      basePrice: {
        amount: 659.0,
        currencyCode: 'USD'
      },
      taxesPrice: {
        amount: 627.08,
        currencyCode: 'USD'
      },
      totalPrice: {
        amount: 1286.08,
        currencyCode: 'USD'
      }
    }
  },
  {
    key: 12345,
    type: 'roundtrip',
    airlegs: [
      {
        departureAirport: {
          name: 'Licenciado Benito Juarez International Airport',
          city: 'Mexico City',
          country: 'mexico',
          iata: 'mex'
        },
        departureDate: '2018-04-05T09:45:00.000-0700',
        arrivalAirport: {
          name: 'Charles De Gaulle International Airport',
          city: 'Paris',
          country: 'france',
          iata: 'cdg'
        },
        arrivalDate: '2018-04-06T06:55:00.000-0700',
        segments: [
          {
            departureAirport: {
              airportName: 'Licenciado Benito Juarez International Airport',
              city: 'Mexico City',
              country: 'mexico',
              iata: 'mex'
            },
            arrivalAirport: {
              airportName: 'Washington Dulles International Airport',
              city: 'Washington',
              country: 'united states',
              iata: 'iad'
            },
            departureDate: '2018-04-05T09:45:00.000-0700',
            arrivalDate: '2018-04-05T15:05:00.000-0700',
            duration: 260,
            airLineMarketingName: 'United Airlines',
            airLineOperationName: 'United Airlines',
            airplaneData: '320',
            cabinTypes: [
              'Economy/Coach'
            ]
          },
          {
            departureAirport: {
              airportName: 'Washington Dulles International Airport',
              city: 'Washington',
              country: 'united states',
              iata: 'iad'
            },
            arrivalAirport: {
              airportName: 'Charles De Gaulle International Airport',
              city: 'Paris',
              country: 'france',
              iata: 'cdg'
            },
            departureDate: '2018-04-05T17:20:00.000-0700',
            arrivalDate: '2018-04-06T06:55:00.000-0700',
            duration: 455,
            airLineMarketingName: 'United Airlines',
            airLineOperationName: 'United Airlines',
            airplaneData: '788',
            cabinTypes: [
              'Economy/Coach'
            ]
          }
        ]
      },
      {
        departureAirport: {
          name: 'Charles De Gaulle International Airport',
          city: 'Paris',
          country: 'france',
          iata: 'cdg'
        },
        departureDate: '2018-04-09T09:45:00.000-0700',
        arrivalAirport: {
          name: 'Licenciado Benito Juarez International Airport',
          city: 'Mexico City',
          country: 'mexico',
          iata: 'mex'
        },
        arrivalDate: '2018-04-09T22:00:00.000-0700',
        segments: [
          {
            departureAirport: {
              airportName: 'Charles De Gaulle International Airport',
              city: 'Paris',
              country: 'france',
              iata: 'cdg'
            },
            arrivalAirport: {
              airportName: 'Newark Liberty International Airport',
              city: 'Newark',
              country: 'united states',
              iata: 'ewr'
            },
            departureDate: '2018-04-09T09:45:00.000-0700',
            arrivalDate: '2018-04-09T11:55:00.000-0700',
            duration: 490,
            airLineMarketingName: 'United Airlines',
            airLineOperationName: 'United Airlines',
            airplaneData: '777',
            cabinTypes: [
              'Economy/Coach'
            ]
          },
          {
            departureAirport: {
              airportName: 'Newark Liberty International Airport',
              city: 'Newark',
              country: 'united states',
              iata: 'ewr'
            },
            arrivalAirport: {
              airportName: 'George Bush Intercontinental Houston Airport',
              city: 'Houston',
              country: 'united states',
              iata: 'iah'
            },
            departureDate: '2018-04-09T16:00:00.000-0700',
            arrivalDate: '2018-04-09T18:49:00.000-0700',
            duration: 229,
            airLineMarketingName: 'United Airlines',
            airLineOperationName: 'United Airlines',
            airplaneData: '763',
            cabinTypes: [
              'Economy/Coach'
            ]
          },
          {
            departureAirport: {
              airportName: 'George Bush Intercontinental Houston Airport',
              city: 'Houston',
              country: 'united states',
              iata: 'iah'
            },
            arrivalAirport: {
              airportName: 'Licenciado Benito Juarez International Airport',
              city: 'Mexico City',
              country: 'mexico',
              iata: 'mex'
            },
            departureDate: '2018-04-09T19:40:00.000-0700',
            arrivalDate: '2018-04-09T22:00:00.000-0700',
            duration: 140,
            airLineMarketingName: 'United Airlines',
            airLineOperationName: 'United Airlines',
            airplaneData: '319',
            cabinTypes: [
              'Economy/Coach'
            ]
          }
        ]
      }
    ],
    fares: {
      basePrice: {
        amount: 659.0,
        currencyCode: 'USD'
      },
      taxesPrice: {
        amount: 627.08,
        currencyCode: 'USD'
      },
      totalPrice: {
        amount: 1286.08,
        currencyCode: 'USD'
      }
    }
  },
  {
    key: 12345,
    type: 'roundtrip',
    airlegs: [
      {
        departureAirport: {
          name: 'Licenciado Benito Juarez International Airport',
          city: 'Mexico City',
          country: 'mexico',
          iata: 'mex'
        },
        departureDate: '2018-04-05T05:40:00.000-0700',
        arrivalAirport: {
          name: 'Charles De Gaulle International Airport',
          city: 'Paris',
          country: 'france',
          iata: 'cdg'
        },
        arrivalDate: '2018-04-06T06:55:00.000-0700',
        segments: [
          {
            departureAirport: {
              airportName: 'Licenciado Benito Juarez International Airport',
              city: 'Mexico City',
              country: 'mexico',
              iata: 'mex'
            },
            arrivalAirport: {
              airportName: 'George Bush Intercontinental Houston Airport',
              city: 'Houston',
              country: 'united states',
              iata: 'iah'
            },
            departureDate: '2018-04-05T05:40:00.000-0700',
            arrivalDate: '2018-04-05T07:59:00.000-0700',
            duration: 139,
            airLineMarketingName: 'United Airlines',
            airLineOperationName: 'United Airlines',
            airplaneData: '738',
            cabinTypes: [
              'Economy/Coach'
            ]
          },
          {
            departureAirport: {
              airportName: 'George Bush Intercontinental Houston Airport',
              city: 'Houston',
              country: 'united states',
              iata: 'iah'
            },
            arrivalAirport: {
              airportName: 'Washington Dulles International Airport',
              city: 'Washington',
              country: 'united states',
              iata: 'iad'
            },
            departureDate: '2018-04-05T12:05:00.000-0700',
            arrivalDate: '2018-04-05T16:02:00.000-0700',
            duration: 177,
            airLineMarketingName: 'United Airlines',
            airLineOperationName: 'United Airlines',
            airplaneData: '763',
            cabinTypes: [
              'Economy/Coach'
            ]
          },
          {
            departureAirport: {
              airportName: 'Washington Dulles International Airport',
              city: 'Washington',
              country: 'united states',
              iata: 'iad'
            },
            arrivalAirport: {
              airportName: 'Charles De Gaulle International Airport',
              city: 'Paris',
              country: 'france',
              iata: 'cdg'
            },
            departureDate: '2018-04-05T17:20:00.000-0700',
            arrivalDate: '2018-04-06T06:55:00.000-0700',
            duration: 455,
            airLineMarketingName: 'United Airlines',
            airLineOperationName: 'United Airlines',
            airplaneData: '788',
            cabinTypes: [
              'Economy/Coach'
            ]
          }
        ]
      },
      {
        departureAirport: {
          name: 'Charles De Gaulle International Airport',
          city: 'Paris',
          country: 'france',
          iata: 'cdg'
        },
        departureDate: '2018-04-09T12:25:00.000-0700',
        arrivalAirport: {
          name: 'Licenciado Benito Juarez International Airport',
          city: 'Mexico City',
          country: 'mexico',
          iata: 'mex'
        },
        arrivalDate: '2018-04-09T21:05:00.000-0700',
        segments: [
          {
            departureAirport: {
              airportName: 'Charles De Gaulle International Airport',
              city: 'Paris',
              country: 'france',
              iata: 'cdg'
            },
            arrivalAirport: {
              airportName: 'Washington Dulles International Airport',
              city: 'Washington',
              country: 'united states',
              iata: 'iad'
            },
            departureDate: '2018-04-09T12:25:00.000-0700',
            arrivalDate: '2018-04-09T14:40:00.000-0700',
            duration: 495,
            airLineMarketingName: 'United Airlines',
            airLineOperationName: 'United Airlines',
            airplaneData: '788',
            cabinTypes: [
              'Economy/Coach'
            ]
          },
          {
            departureAirport: {
              airportName: 'Washington Dulles International Airport',
              city: 'Washington',
              country: 'united states',
              iata: 'iad'
            },
            arrivalAirport: {
              airportName: 'Licenciado Benito Juarez International Airport',
              city: 'Mexico City',
              country: 'mexico',
              iata: 'mex'
            },
            departureDate: '2018-04-09T17:20:00.000-0700',
            arrivalDate: '2018-04-09T21:05:00.000-0700',
            duration: 285,
            airLineMarketingName: 'United Airlines',
            airLineOperationName: 'United Airlines',
            airplaneData: '738',
            cabinTypes: [
              'Economy/Coach'
            ]
          }
        ]
      }
    ],
    fares: {
      basePrice: {
        amount: 659.0,
        currencyCode: 'USD'
      },
      taxesPrice: {
        amount: 627.08,
        currencyCode: 'USD'
      },
      totalPrice: {
        amount: 1286.08,
        currencyCode: 'USD'
      }
    }
  }
]);
