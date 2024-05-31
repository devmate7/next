import { useState, useEffect } from 'react';
import { useCart } from '@/contexts/cart';
import { useCoupon } from '@/contexts/coupon';
import CheckoutModal from './checkoutModal';

export default function SummaryOrder() {
	const [discount, setDiscount] = useState(0);
	const { totalPrice, totalQty } = useCart();
	const { selectedCoupon } = useCoupon();

	useEffect(() => {
		if (selectedCoupon) {
			setDiscount(Math.round(totalPrice * selectedCoupon.DiscountRate));
		} else {
			setDiscount(0);
		}
	}, [totalPrice, selectedCoupon]);

	return (
		<>
			<CheckoutModal discount={discount} />
			<div className="lg:col-span-1 lg:w-full lg:h-fit lg:via-transparent lg:to-transparent border border-gray-300 rounded-lg">
				<div className="sticky top-0 start-0">
					<div className="group flex items-center gap-x-3 dark:border-neutral-700 bg-gray-100">
						<h5 className="group-hover:text-gray-600 text-md font-semibold text-gray-800 p-4">
							訂單明細
						</h5>
					</div>
					<div className="space-y-4 p-4">
						<div className="flex items-center justify-between text-sm hs-tooltip">
							<p>優惠折抵</p>
							<p className="underline hs-tooltip-toggle">-NT${discount}</p>
							<span
								className="hs-tooltip-content hs-tooltip-shown:opacity-50 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-1 px-2 bg-gray-600 text-white text-xs rounded-lg"
								role="tooltip">
								{selectedCoupon ? selectedCoupon.Name : '無優惠券'}
							</span>
						</div>
						<div className="flex items-center justify-between text-sm">
							<p>{totalQty} 件小計</p>
							<p>NT${totalPrice}</p>
						</div>
						<div className="flex items-center justify-between text-lg border-t pt-4">
							<p>結帳總金額 :</p>
							<p className="font-bold">NT${totalPrice - discount}</p>
						</div>
						<button
							type="button"
							className="py-2 w-full inline-flex items-center justify-center gap-x-2 text-md font-bold rounded-lg border border-transparent bg-orange-400 text-white hover:bg-orange-500 disabled:opacity-50 disabled:pointer-events-none"
							data-hs-overlay="#hs-basic-modal">
							送出結帳
						</button>
						<div className="flex w-full justify-center text-xs ">
							<a href="#">
								<span className="text-xs font-bold text-gray-500 hover:text-gray-400">
									我已詳閱並同意〈服務契約〉及服務內容
								</span>
							</a>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
