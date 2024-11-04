import React, { useEffect, useContext, useState } from "react";
import { AuthContext } from "../context/auth.context";
import { getAccountApi } from "../../api/auth/account";
import Header from "../Layout/Header/Header";
import { useNavigate } from "react-router-dom";

export default function Home() {
	return (
		<div>
			Home
		</div>
	);
}
