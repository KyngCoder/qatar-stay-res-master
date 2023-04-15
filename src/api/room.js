const rooms =  [
      {
        "id":6,
        "property_type": "hotel",
        "property_name": "The Pearl Hotel",
        "room_number": 101,
        "floor_number": 1,
        "amenities": ["king bed", "ocean view", "balcony", "mini-bar"],
        "available": true,
        "images":["https://s7d2.scene7.com/is/image/ritzcarlton/dohrz-guestroom-50631550?$XlargeViewport100pct$", "https://s7d2.scene7.com/is/image/ritzcarlton/dohrz-twin-50631555?$XlargeViewport100pct$", "https://img.freepik.com/free-photo/elegant-hotel-room-with-big-bed_1203-1494.jpg?w=740&t=st=1681230406~exp=1681231006~hmac=292bf48c8dccfed3e862462819c2bbafae958261d97752056321fb3e3bf29a7b", "https://img.freepik.com/free-photo/hotel-room-luxury-resort_53876-138105.jpg?w=740&t=st=1681230440~exp=1681231040~hmac=7d9babfccd9c90f701bf1d746418fcf0a32132bb9c9565de267f78471269054b", "https://s7d2.scene7.com/is/image/ritzcarlton/dohrz-suite-bedroom-26986-08037?$SmallViewport100pct$", ],
        "room_type": "executive",
        "rating": 4.5,
        "price": 470
      },
      {
        "id":5,
        "property_type": "hotel",
        "property_name": "The Pearl Hotel",
        "room_number": 102,
        "floor_number": 1,
        "amenities": ["king bed", "ocean view", "balcony", "mini-bar"],
        "available": false,
        "room_type": "executive",
        "rating": 4.7,
        "images":["https://s7d2.scene7.com/is/image/ritzcarlton/dohrz-guestroom-50631550?$XlargeViewport100pct$", "https://s7d2.scene7.com/is/image/ritzcarlton/dohrz-twin-50631555?$XlargeViewport100pct$", "https://img.freepik.com/free-photo/elegant-hotel-room-with-big-bed_1203-1494.jpg?w=740&t=st=1681230406~exp=1681231006~hmac=292bf48c8dccfed3e862462819c2bbafae958261d97752056321fb3e3bf29a7b", "https://img.freepik.com/free-photo/hotel-room-luxury-resort_53876-138105.jpg?w=740&t=st=1681230440~exp=1681231040~hmac=7d9babfccd9c90f701bf1d746418fcf0a32132bb9c9565de267f78471269054b", "https://s7d2.scene7.com/is/image/ritzcarlton/dohrz-suite-bedroom-26986-08037?$SmallViewport100pct$"],
        "price":349
      },
      {
        "id":4,
        "property_type": "hotel",
        "property_name": "The Pearl Hotel",
        "room_number": 201,
        "floor_number": 2,
        "amenities": ["king bed", "ocean view", "balcony", "mini-bar"],
        "available": true,
        "room_type": "family",
        "rating": 4.2,
        "images":["https://s7d2.scene7.com/is/image/ritzcarlton/dohrz-guestroom-50631550?$XlargeViewport100pct$", "https://s7d2.scene7.com/is/image/ritzcarlton/dohrz-twin-50631555?$XlargeViewport100pct$", "https://img.freepik.com/free-photo/elegant-hotel-room-with-big-bed_1203-1494.jpg?w=740&t=st=1681230406~exp=1681231006~hmac=292bf48c8dccfed3e862462819c2bbafae958261d97752056321fb3e3bf29a7b", "https://img.freepik.com/free-photo/hotel-room-luxury-resort_53876-138105.jpg?w=740&t=st=1681230440~exp=1681231040~hmac=7d9babfccd9c90f701bf1d746418fcf0a32132bb9c9565de267f78471269054b", "https://s7d2.scene7.com/is/image/ritzcarlton/dohrz-suite-bedroom-26986-08037?$SmallViewport100pct$",],
        "price": 300,
      },
      {
        "id":0,
        "property_type": "hotel",
        "property_name": "The Pearl Hotel",
        "room_number": 202,
        "floor_number": 2,
        "amenities": ["king bed", "ocean view", "balcony", "mini-bar"],
        "available": true,
        "room_type": "family",
        "rating": 4.0,
        "images":["https://s7d2.scene7.com/is/image/ritzcarlton/dohrz-guestroom-50631550?$XlargeViewport100pct$", "https://s7d2.scene7.com/is/image/ritzcarlton/dohrz-twin-50631555?$XlargeViewport100pct$", "https://img.freepik.com/free-photo/elegant-hotel-room-with-big-bed_1203-1494.jpg?w=740&t=st=1681230406~exp=1681231006~hmac=292bf48c8dccfed3e862462819c2bbafae958261d97752056321fb3e3bf29a7b", "https://img.freepik.com/free-photo/hotel-room-luxury-resort_53876-138105.jpg?w=740&t=st=1681230440~exp=1681231040~hmac=7d9babfccd9c90f701bf1d746418fcf0a32132bb9c9565de267f78471269054b", "https://s7d2.scene7.com/is/image/ritzcarlton/dohrz-suite-bedroom-26986-08037?$SmallViewport100pct$", ],
        "price": 200
      },
      {
        "id":1,
        "property_type": "hotel",
        "property_name": "The Pearl Hotel",
        "room_number": 301,
        "floor_number": 3,
        "amenities": ["king bed", "ocean view", "balcony", "mini-bar"],
        "available": true,
        "room_type": "standard",
        "rating": 3.8,
        "images":["https://s7d2.scene7.com/is/image/ritzcarlton/dohrz-guestroom-50631550?$XlargeViewport100pct$", "https://s7d2.scene7.com/is/image/ritzcarlton/dohrz-twin-50631555?$XlargeViewport100pct$", "https://img.freepik.com/free-photo/elegant-hotel-room-with-big-bed_1203-1494.jpg?w=740&t=st=1681230406~exp=1681231006~hmac=292bf48c8dccfed3e862462819c2bbafae958261d97752056321fb3e3bf29a7b", "https://img.freepik.com/free-photo/hotel-room-luxury-resort_53876-138105.jpg?w=740&t=st=1681230440~exp=1681231040~hmac=7d9babfccd9c90f701bf1d746418fcf0a32132bb9c9565de267f78471269054b", "https://s7d2.scene7.com/is/image/ritzcarlton/dohrz-suite-bedroom-26986-08037?$SmallViewport100pct$", ],
        "price": 400
      },
      {
        "id":2,
        "property_type": "hotel",
        "property_name": "The Pearl Hotel",
        "room_number": 302,
        "floor_number": 3,
        "amenities": ["king bed", "ocean view", "balcony", "mini-bar"],
        "available": false,
        "room_type": "standard",
        "rating": 4.1,
        "images":["https://s7d2.scene7.com/is/image/ritzcarlton/dohrz-guestroom-50631550?$XlargeViewport100pct$", "https://s7d2.scene7.com/is/image/ritzcarlton/dohrz-twin-50631555?$XlargeViewport100pct$", "https://img.freepik.com/free-photo/elegant-hotel-room-with-big-bed_1203-1494.jpg?w=740&t=st=1681230406~exp=1681231006~hmac=292bf48c8dccfed3e862462819c2bbafae958261d97752056321fb3e3bf29a7b", "https://img.freepik.com/free-photo/hotel-room-luxury-resort_53876-138105.jpg?w=740&t=st=1681230440~exp=1681231040~hmac=7d9babfccd9c90f701bf1d746418fcf0a32132bb9c9565de267f78471269054b", "https://s7d2.scene7.com/is/image/ritzcarlton/dohrz-suite-bedroom-26986-08037?$SmallViewport100pct$", " https://www.remotelands.com/storage/media/2072/conversions/b200302021-banner-size.jpg", ],
        "price": 370
      },
      {
        "property_type": "apartment",
        "property_name": "West Bay Apartment",
        "room_number": "A1",
        "floor_number": 1,
        "amenities": ["queen bed", "city view", "kitchenette", "work desk"],
        "available": true,
        "room_type": "standard",
        "rating": 4.3
      },
      {
        "property_type": "apartment",
        "property_name": "West Bay Apartment",
        "room_number": "A2",
        "floor_number": 1,
        "amenities": ["queen bed", "city view", "kitchenette", "work desk"],
        "available": false,
        "room_type": "standard",
        "rating": 4.0
      },
      {
        "property_type": "apartment",
        "property_name": "West Bay Apartment",
        "room_number": "A3",
        "floor_number": 2,
        "amenities": ["king bed", "ocean view", "balcony", "mini-bar"],
       
        "available": true,
        "room_type": "executive",
        "rating": 4.5
        },
        {
        "property_type": "apartment",
        "property_name": "West Bay Apartment",
        "room_number": "A4",
        "floor_number": 2,
        "amenities": ["king bed", "ocean view", "balcony", "mini-bar"],
        "available": true,
        "room_type": "executive",
        "rating": 4.7
        },
        {
        "property_type": "apartment",
        "property_name": "West Bay Apartment",
        "room_number": "A5",
        "floor_number": 3,
        "amenities": ["king bed", "ocean view", "balcony", "mini-bar"],
        "available": true,
        "room_type": "family",
        "rating": 4.2
        },
        {
        "property_type": "apartment",
        "property_name": "West Bay Apartment",
        "room_number": "A6",
        "floor_number": 3,
        "amenities": ["king bed", "ocean view", "balcony", "mini-bar"],
        "available": false,
        "room_type": "family",
        "rating": 4.0
        },
        {
        "property_type": "villa",
        "property_name": "Lusail Villa",
        "room_number": "V1",
        "floor_number": 1,
        "amenities": ["king bed", "private pool", "ocean view", "balcony"],
        "available": true,
        "room_type": "executive",
        "rating": 4.8
        },
        {
        "property_type": "villa",
        "property_name": "Lusail Villa",
        "room_number": "V2",
        "floor_number": 1,
        "amenities": ["king bed", "private pool", "ocean view", "balcony"],
        "available": false,
        "room_type": "executive",
        "rating": 4.5
        },
        {
        "property_type": "villa",
        "property_name": "Lusail Villa",
        "room_number": "V3",
        "floor_number": 2,
        "amenities": ["king bed", "private pool", "ocean view", "balcony"],
        "available": true,
        "room_type": "family",
        "rating": 4.3
        },
        {
        "property_type": "villa",
        "property_name": "Lusail Villa",
        "room_number": "V4",
        "floor_number": 2,
        "amenities": ["king bed", "private pool", "ocean view", "balcony"],
        "available": false,
        "room_type": "family",
        "rating": 4.1
        },
        {
        "property_type": "villa",
        "property_name": "Lusail Villa",
        "room_number": "V5",
        "floor_number": 3,
        "amenities": ["king bed", "private pool", "ocean view", "balcony"],
        "available": true,
        "room_type": "standard",
        "rating": 4.0
        },
    ]
    
    export default rooms