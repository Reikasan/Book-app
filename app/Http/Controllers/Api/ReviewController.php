<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Review;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ReviewController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $reviews = Review::with('book')->get();
        return response()->json($reviews, 200);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Review $review)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Review $review)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Review $review)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Review $review)
    {
        //
    }

    public function getRecentReviews(Request $request)
    {
        $input = $request->validate([
            'limit' => 'integer|min:1|max:20|nullable'
        ]);
        $reviews = Review::with(['book', 'user'])->orderBy('created_at', 'desc')->get();

        if(isset($input['limit'])) {
            $reviews = $reviews->take($input['limit']);
        }

        return response()->json($reviews, 200);
    }

    public function getPopularBooks(Request $request) {
        $input = $request->validate([
            'limit' => 'integer|min:1|max:20|nullable'
        ]);

        $popularBooks = Review::with('book')->select(['book_id', 'book_id' => DB::raw('count(*) as total'), 'rating' => DB::raw('avg(rating) as rating')])
            ->groupBy('book_id')
            ->orderByDesc('total')
            ->orderByDesc('rating')
            ->get();

        if(isset($input['limit'])) {
            $reviews = $popularBooks->take($input['limit']);
        }
        return response()->json($popularBooks, 200);
    }
}
