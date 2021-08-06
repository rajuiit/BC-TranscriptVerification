import web3 from "./web3";

export const address = "0x8775dF246CE530bB008e1E09FcAa3ceA1437593c";

export const abi = [
  {
    constant: false,
    inputs: [
      {
        name: "uniname",
        type: "string"
      },
      {
        name: "sname",
        type: "string"
      },
      {
        name: "dept",
        type: "string"
      },

      {
        name: "course",
        type: "string"
      },
      {
        name: "session",
        type: "string"
      },
      {
        name: "registration",
        type: "string"
      },

      {
        name: "sid",
        type: "string"
      },
      {
        name: "credit",
        type: "string"
      },
      {
        name: "cgpa",
        type: "string"
      },

      {
        name: "sem",
        type: "string"
      },
      {
        name: "ccode",
        type: "string"
      },
      {
        name: "ctitle",
        type: "string"
      },
      {
        name: "chour",
        type: "string"
      },
      {
        name: "lgrade",
        type: "string"
      },
      {
        name: "gpoint",
        type: "string"
      },

      {
        name: "ccode1",
        type: "string"
      },
      {
        name: "ctitle1",
        type: "string"
      },
      {
        name: "chour1",
        type: "string"
      },
      {
        name: "lgrade1",
        type: "string"
      },
      {
        name: "gpoint1",
        type: "string"
      },

      {
        name: "ccode2",
        type: "string"
      },
      {
        name: "ctitle2",
        type: "string"
      },
      {
        name: "chour2",
        type: "string"
      },
      {
        name: "lgrade2",
        type: "string"
      },
      {
        name: "gpoint2",
        type: "string"
      },

      {
        name: "gpa",
        type: "string"
      }

    ],
    name: "addcert",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        name: "coladd",
        type: "address"
      },
      {
        name: "name",
        type: "string"
      }
    ],
    name: "addCollege",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "constructor"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        name: "id",
        type: "uint256"
      }
    ],
    name: "added",
    type: "event"
  },
  {
    constant: true,
    inputs: [
      {
        name: "",
        type: "uint256"
      }
    ],
    name: "certs",
    outputs: [
      {
        name: "name",
        type: "string"
      },
      {
        name: "course",
        type: "string"
      },
      {
        name: "email",
        type: "string"
      },
      {
        name: "sender",
        type: "string"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [
      {
        name: "col",
        type: "address"
      }
    ],
    name: "checkcoll",
    outputs: [
      {
        name: "",
        type: "bool"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [
      {
        name: "id",
        type: "uint256"
      }
    ],
    name: "getcert",
    outputs: [
      {
        name: "",
        type: "string"
      },
      {
        name: "",
        type: "string"
      },
      {
        name: "",
        type: "string"
      },
      {
        name: "",
        type: "string"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "getid",
    outputs: [
      {
        name: "id",
        type: "uint256"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  }
];

export default new web3.eth.Contract(abi, address);
