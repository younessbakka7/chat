<?php

namespace App\Http\Controllers;

use App\Models\Chat;
use Illuminate\Http\Request;

class ChatController extends Controller
{
    public function index() {
        $chats = Chat::where("user_id",auth('sanctum')->id())->get();

        return response()->json(["chats" => $chats],200);
    }

    public function store(Request $request) {
        $newChat = $request->validate([
            "question" => "required",
            "answer" => "required",
            "category" => "required"
        ]);

        $newChat["user_id"] = auth("sanctum")->id();

        Chat::create($newChat);
        return response()->json("chat saved",200);
    }
}
