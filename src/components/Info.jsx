import { useSelector } from "react-redux";
import { trueCalculate } from "../utils/utils.js";

const Info = () => {
  const from = useSelector((state) => state.exchangeRateState.from);
  const to = useSelector((state) => state.exchangeRateState.to);
  const exchangeRates = useSelector(
    (state) => state.exchangeRateState.exchangeRates
  );
  const reverseExchangeRates = useSelector(
    (state) => state.exchangeRateState.reverseExchangeRates
  );

  return (
    <div className="flex justify-center mb-4">
      <div className="grid lg:grid-cols-2 grid-cols-1 justify-center gap-8 w-1/2">
        <div className="flex flex-col items-center border w-full rounded-lg p-2">
          <div className="w-full text-center mb-2">
            Convert {from} to {to}
          </div>
          <div className="w-full">
            <div>
              <table className="text-center w-full">
                <thead className="">
                  <tr>
                    <th className="">{from}</th>
                    <th className="">{to}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white border-b">
                    <td className="">1 {from}</td>
                    <td className="">
                      {exchangeRates[to]} {to}
                    </td>
                  </tr>
                  <tr className="bg-white border-b">
                    <td className="">5 {from}</td>
                    <td className="">
                      {trueCalculate("*", 5, exchangeRates[to] || 1)} {to}
                    </td>
                  </tr>
                  <tr className="bg-white border-b">
                    <td className="">10 {from}</td>
                    <td className="">
                      {trueCalculate("*", 10, exchangeRates[to] || 1)} {to}
                    </td>
                  </tr>
                  <tr className="bg-white border-b">
                    <td className="">25 {from}</td>
                    <td className="">
                      {trueCalculate("*", 25, exchangeRates[to] || 1)} {to}
                    </td>
                  </tr>
                  <tr className="bg-white border-b">
                    <td className="">50 {from}</td>
                    <td className="">
                      {trueCalculate("*", 50, exchangeRates[to] || 1)} {to}
                    </td>
                  </tr>
                  <tr className="bg-white border-b">
                    <td className="">100 {from}</td>
                    <td className="">
                      {trueCalculate("*", 100, exchangeRates[to] || 1)} {to}
                    </td>
                  </tr>
                  <tr className="bg-white border-b">
                    <td className="">500 {from}</td>
                    <td className="">
                      {trueCalculate("*", 500, exchangeRates[to] || 1)} {to}
                    </td>
                  </tr>
                  <tr className="bg-white border-b">
                    <td className="">1000 {from}</td>
                    <td className="">
                      {trueCalculate("*", 1000, exchangeRates[to] || 1)} {to}
                    </td>
                  </tr>
                  <tr className="bg-white border-b">
                    <td className="">5000 {from}</td>
                    <td className="">
                      {trueCalculate("*", 5000, exchangeRates[to] || 1)} {to}
                    </td>
                  </tr>
                  <tr className="bg-white border-b">
                    <td className="">10000 {from}</td>
                    <td className="">
                      {trueCalculate("*", 10000, exchangeRates[to] || 1)} {to}
                    </td>
                  </tr>
                  <tr className="bg-white border-b">
                    <td className="">50000 {from}</td>
                    <td className="">
                      {trueCalculate("*", 50000, exchangeRates[to] || 1)} {to}
                    </td>
                  </tr>
                  <tr className="bg-white">
                    <td className="">100000 {from}</td>
                    <td className="">
                      {trueCalculate("*", 100000, exchangeRates[to] || 1)} {to}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center border w-full rounded-lg p-2">
          <div className="w-full text-center mb-2">
            Convert {to} to {from}
          </div>
          <div className="w-full">
            <div>
              <table className="text-center w-full">
                <thead className="">
                  <tr>
                    <th className="">{to}</th>
                    <th className="">{from}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white border-b">
                    <td className="">1 {to}</td>
                    <td className="">
                      {reverseExchangeRates[from]} {from}
                    </td>
                  </tr>
                  <tr className="bg-white border-b">
                    <td className="">5 {to}</td>
                    <td className="">
                      {trueCalculate("*", 5, reverseExchangeRates[from] || 1)}{" "}
                      {from}
                    </td>
                  </tr>
                  <tr className="bg-white border-b">
                    <td className="">10 {to}</td>
                    <td className="">
                      {trueCalculate("*", 10, reverseExchangeRates[from] || 1)}{" "}
                      {from}
                    </td>
                  </tr>
                  <tr className="bg-white border-b">
                    <td className="">25 {to}</td>
                    <td className="">
                      {trueCalculate("*", 25, reverseExchangeRates[from] || 1)}{" "}
                      {from}
                    </td>
                  </tr>
                  <tr className="bg-white border-b">
                    <td className="">50 {to}</td>
                    <td className="">
                      {trueCalculate("*", 50, reverseExchangeRates[from] || 1)}{" "}
                      {from}
                    </td>
                  </tr>
                  <tr className="bg-white border-b">
                    <td className="">100 {to}</td>
                    <td className="">
                      {trueCalculate("*", 100, reverseExchangeRates[from] || 1)}{" "}
                      {from}
                    </td>
                  </tr>
                  <tr className="bg-white border-b">
                    <td className="">500 {to}</td>
                    <td className="">
                      {trueCalculate("*", 500, reverseExchangeRates[from] || 1)}{" "}
                      {from}
                    </td>
                  </tr>
                  <tr className="bg-white border-b">
                    <td className="">1000 {to}</td>
                    <td className="">
                      {trueCalculate(
                        "*",
                        1000,
                        reverseExchangeRates[from] || 1
                      )}{" "}
                      {from}
                    </td>
                  </tr>
                  <tr className="bg-white border-b">
                    <td className="">5000 {to}</td>
                    <td className="">
                      {trueCalculate(
                        "*",
                        5000,
                        reverseExchangeRates[from] || 1
                      )}{" "}
                      {from}
                    </td>
                  </tr>
                  <tr className="bg-white border-b">
                    <td className="">10000 {to}</td>
                    <td className="">
                      {trueCalculate(
                        "*",
                        10000,
                        reverseExchangeRates[from] || 1
                      )}{" "}
                      {from}
                    </td>
                  </tr>
                  <tr className="bg-white border-b">
                    <td className="">50000 {to}</td>
                    <td className="">
                      {trueCalculate(
                        "*",
                        50000,
                        reverseExchangeRates[from] || 1
                      )}{" "}
                      {from}
                    </td>
                  </tr>
                  <tr className="bg-white">
                    <td className="">100000 {to}</td>
                    <td className="">
                      {trueCalculate(
                        "*",
                        100000,
                        reverseExchangeRates[from] || 1
                      )}{" "}
                      {from}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
