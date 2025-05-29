export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      body_types: {
        Row: {
          created_at: string
          display_name: string
          id: string
          name: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          display_name: string
          id?: string
          name: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          display_name?: string
          id?: string
          name?: string
          updated_at?: string
        }
        Relationships: []
      }
      cache_postcode: {
        Row: {
          cache_data: Json
          expiry: string | null
          id: number
          user_id: string | null
        }
        Insert: {
          cache_data: Json
          expiry?: string | null
          id?: number
          user_id?: string | null
        }
        Update: {
          cache_data?: Json
          expiry?: string | null
          id?: number
          user_id?: string | null
        }
        Relationships: []
      }
      cache_url: {
        Row: {
          cache_data: Json
          expiry: string | null
          id: number
          user_id: string | null
        }
        Insert: {
          cache_data: Json
          expiry?: string | null
          id?: number
          user_id?: string | null
        }
        Update: {
          cache_data?: Json
          expiry?: string | null
          id?: number
          user_id?: string | null
        }
        Relationships: []
      }
      car_colors: {
        Row: {
          created_at: string
          display_name: string
          id: string
          name: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          display_name: string
          id?: string
          name: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          display_name?: string
          id?: string
          name?: string
          updated_at?: string
        }
        Relationships: []
      }
      checkout_sessions: {
        Row: {
          created: string
          id: string
          metadata: Json | null
          mode: Database["public"]["Enums"]["checkout_mode"] | null
          payment_status:
            | Database["public"]["Enums"]["checkout_payment_status"]
            | null
          price_id: string | null
          quantity: number | null
          status: Database["public"]["Enums"]["checkout_status"] | null
          user_id: string
        }
        Insert: {
          created?: string
          id: string
          metadata?: Json | null
          mode?: Database["public"]["Enums"]["checkout_mode"] | null
          payment_status?:
            | Database["public"]["Enums"]["checkout_payment_status"]
            | null
          price_id?: string | null
          quantity?: number | null
          status?: Database["public"]["Enums"]["checkout_status"] | null
          user_id: string
        }
        Update: {
          created?: string
          id?: string
          metadata?: Json | null
          mode?: Database["public"]["Enums"]["checkout_mode"] | null
          payment_status?:
            | Database["public"]["Enums"]["checkout_payment_status"]
            | null
          price_id?: string | null
          quantity?: number | null
          status?: Database["public"]["Enums"]["checkout_status"] | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "checkout_sessions_price_id_fkey"
            columns: ["price_id"]
            isOneToOne: false
            referencedRelation: "prices"
            referencedColumns: ["id"]
          },
        ]
      }
      company: {
        Row: {
          address: string | null
          created_at: string
          id: string
          name: string
          owner_ref: string
          post_code: string
          registration_number: string
          stock_size: string
        }
        Insert: {
          address?: string | null
          created_at?: string
          id?: string
          name: string
          owner_ref: string
          post_code: string
          registration_number: string
          stock_size: string
        }
        Update: {
          address?: string | null
          created_at?: string
          id?: string
          name?: string
          owner_ref?: string
          post_code?: string
          registration_number?: string
          stock_size?: string
        }
        Relationships: []
      }
      company_members: {
        Row: {
          company_ref: string
          created_at: string
          id: string
          member_role: Database["public"]["Enums"]["member_role_enum"]
          user_ref: string
        }
        Insert: {
          company_ref: string
          created_at?: string
          id?: string
          member_role: Database["public"]["Enums"]["member_role_enum"]
          user_ref: string
        }
        Update: {
          company_ref?: string
          created_at?: string
          id?: string
          member_role?: Database["public"]["Enums"]["member_role_enum"]
          user_ref?: string
        }
        Relationships: [
          {
            foreignKeyName: "company_members_company_ref_fkey"
            columns: ["company_ref"]
            isOneToOne: false
            referencedRelation: "company"
            referencedColumns: ["id"]
          },
        ]
      }
      customers: {
        Row: {
          id: string
          purchased_events: number | null
          stripe_connect_account_id: string | null
          stripe_customer_id: string | null
          subscribed_events: number | null
        }
        Insert: {
          id: string
          purchased_events?: number | null
          stripe_connect_account_id?: string | null
          stripe_customer_id?: string | null
          subscribed_events?: number | null
        }
        Update: {
          id?: string
          purchased_events?: number | null
          stripe_connect_account_id?: string | null
          stripe_customer_id?: string | null
          subscribed_events?: number | null
        }
        Relationships: []
      }
      door_options: {
        Row: {
          created_at: string
          display_name: string
          id: string
          updated_at: string
          value: string
        }
        Insert: {
          created_at?: string
          display_name: string
          id?: string
          updated_at?: string
          value: string
        }
        Update: {
          created_at?: string
          display_name?: string
          id?: string
          updated_at?: string
          value?: string
        }
        Relationships: []
      }
      fuel_types: {
        Row: {
          created_at: string
          display_name: string
          id: string
          name: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          display_name: string
          id?: string
          name: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          display_name?: string
          id?: string
          name?: string
          updated_at?: string
        }
        Relationships: []
      }
      list_details: {
        Row: {
          car_details: Json | null
          car_reference: string
          created_at: string
          id: number
          list_id: number
        }
        Insert: {
          car_details?: Json | null
          car_reference: string
          created_at?: string
          id?: number
          list_id: number
        }
        Update: {
          car_details?: Json | null
          car_reference?: string
          created_at?: string
          id?: number
          list_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "list_details_list_id_fkey"
            columns: ["list_id"]
            isOneToOne: false
            referencedRelation: "lists"
            referencedColumns: ["id"]
          },
        ]
      }
      lists: {
        Row: {
          created_at: string | null
          id: number
          is_default: boolean | null
          name: string
          user_id: string | null
        }
        Insert: {
          created_at?: string | null
          id?: number
          is_default?: boolean | null
          name: string
          user_id?: string | null
        }
        Update: {
          created_at?: string | null
          id?: number
          is_default?: boolean | null
          name?: string
          user_id?: string | null
        }
        Relationships: []
      }
      manufacturers: {
        Row: {
          country_of_origin: string | null
          created_at: string
          founded_year: number | null
          id: string
          logo_url: string | null
          name: string
          updated_at: string
        }
        Insert: {
          country_of_origin?: string | null
          created_at?: string
          founded_year?: number | null
          id?: string
          logo_url?: string | null
          name: string
          updated_at?: string
        }
        Update: {
          country_of_origin?: string | null
          created_at?: string
          founded_year?: number | null
          id?: string
          logo_url?: string | null
          name?: string
          updated_at?: string
        }
        Relationships: []
      }
      mileage_options: {
        Row: {
          created_at: string
          display_name: string
          id: string
          sort_order: number
          updated_at: string
          value: string
        }
        Insert: {
          created_at?: string
          display_name: string
          id?: string
          sort_order: number
          updated_at?: string
          value: string
        }
        Update: {
          created_at?: string
          display_name?: string
          id?: string
          sort_order?: number
          updated_at?: string
          value?: string
        }
        Relationships: []
      }
      models: {
        Row: {
          body_type: string | null
          created_at: string
          id: string
          manufacturer_id: string
          name: string
          updated_at: string
          year_introduced: number | null
        }
        Insert: {
          body_type?: string | null
          created_at?: string
          id?: string
          manufacturer_id: string
          name: string
          updated_at?: string
          year_introduced?: number | null
        }
        Update: {
          body_type?: string | null
          created_at?: string
          id?: string
          manufacturer_id?: string
          name?: string
          updated_at?: string
          year_introduced?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "models_body_type_fkey"
            columns: ["body_type"]
            isOneToOne: false
            referencedRelation: "body_types"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "models_manufacturer_id_fkey"
            columns: ["manufacturer_id"]
            isOneToOne: false
            referencedRelation: "manufacturers"
            referencedColumns: ["id"]
          },
        ]
      }
      prices: {
        Row: {
          active: boolean | null
          currency: string | null
          description: string | null
          id: string
          interval: Database["public"]["Enums"]["pricing_plan_interval"] | null
          interval_count: number | null
          metadata: Json | null
          product_id: string | null
          trial_period_days: number | null
          type: Database["public"]["Enums"]["pricing_type"] | null
          unit_amount: number | null
        }
        Insert: {
          active?: boolean | null
          currency?: string | null
          description?: string | null
          id: string
          interval?: Database["public"]["Enums"]["pricing_plan_interval"] | null
          interval_count?: number | null
          metadata?: Json | null
          product_id?: string | null
          trial_period_days?: number | null
          type?: Database["public"]["Enums"]["pricing_type"] | null
          unit_amount?: number | null
        }
        Update: {
          active?: boolean | null
          currency?: string | null
          description?: string | null
          id?: string
          interval?: Database["public"]["Enums"]["pricing_plan_interval"] | null
          interval_count?: number | null
          metadata?: Json | null
          product_id?: string | null
          trial_period_days?: number | null
          type?: Database["public"]["Enums"]["pricing_type"] | null
          unit_amount?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "prices_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
        ]
      }
      products: {
        Row: {
          active: boolean | null
          description: string | null
          id: string
          image: string | null
          metadata: Json | null
          name: string | null
        }
        Insert: {
          active?: boolean | null
          description?: string | null
          id: string
          image?: string | null
          metadata?: Json | null
          name?: string | null
        }
        Update: {
          active?: boolean | null
          description?: string | null
          id?: string
          image?: string | null
          metadata?: Json | null
          name?: string | null
        }
        Relationships: []
      }
      profile: {
        Row: {
          account_type: Database["public"]["Enums"]["account_type_enum"] | null
          address: string | null
          avatar_url: string | null
          created_at: string
          first_name: string
          id: string
          last_name: string
          phone_number: string | null
          post_code: string
          user_ref: string
        }
        Insert: {
          account_type?: Database["public"]["Enums"]["account_type_enum"] | null
          address?: string | null
          avatar_url?: string | null
          created_at?: string
          first_name: string
          id?: string
          last_name: string
          phone_number?: string | null
          post_code: string
          user_ref: string
        }
        Update: {
          account_type?: Database["public"]["Enums"]["account_type_enum"] | null
          address?: string | null
          avatar_url?: string | null
          created_at?: string
          first_name?: string
          id?: string
          last_name?: string
          phone_number?: string | null
          post_code?: string
          user_ref?: string
        }
        Relationships: []
      }
      search_requests: {
        Row: {
          body_type: string | null
          color: string | null
          delete_flag: boolean | null
          doors: string | null
          exclude_writeoff: boolean
          fuel_type: string | null
          generated_url: string | null
          id: string
          make: string
          max_mileage: number | null
          max_price: number | null
          max_year: number | null
          min_mileage: number | null
          min_price: number | null
          min_year: number | null
          model: string
          number_of_results: number
          postcode: string
          radius: number | null
          searched_cars_refs: number[] | null
          seats: string | null
          source: string | null
          status: string
          timestamp: string
          title: string | null
          transmission: string | null
          user_id: string
          valuation_status: string | null
        }
        Insert: {
          body_type?: string | null
          color?: string | null
          delete_flag?: boolean | null
          doors?: string | null
          exclude_writeoff?: boolean
          fuel_type?: string | null
          generated_url?: string | null
          id?: string
          make?: string
          max_mileage?: number | null
          max_price?: number | null
          max_year?: number | null
          min_mileage?: number | null
          min_price?: number | null
          min_year?: number | null
          model?: string
          number_of_results: number
          postcode: string
          radius?: number | null
          searched_cars_refs?: number[] | null
          seats?: string | null
          source?: string | null
          status?: string
          timestamp?: string
          title?: string | null
          transmission?: string | null
          user_id: string
          valuation_status?: string | null
        }
        Update: {
          body_type?: string | null
          color?: string | null
          delete_flag?: boolean | null
          doors?: string | null
          exclude_writeoff?: boolean
          fuel_type?: string | null
          generated_url?: string | null
          id?: string
          make?: string
          max_mileage?: number | null
          max_price?: number | null
          max_year?: number | null
          min_mileage?: number | null
          min_price?: number | null
          min_year?: number | null
          model?: string
          number_of_results?: number
          postcode?: string
          radius?: number | null
          searched_cars_refs?: number[] | null
          seats?: string | null
          source?: string | null
          status?: string
          timestamp?: string
          title?: string | null
          transmission?: string | null
          user_id?: string
          valuation_status?: string | null
        }
        Relationships: []
      }
      searched_cars: {
        Row: {
          created_at: string
          description: string | null
          details: Json | null
          estimated_value: string | null
          estimator: string | null
          id: number
          image_url: string | null
          link: string
          mileage: number | null
          name: string
          price: string | null
          price_tag: string | null
          reg_number: string | null
          search_request_id: string | null
          year: number | null
        }
        Insert: {
          created_at?: string
          description?: string | null
          details?: Json | null
          estimated_value?: string | null
          estimator?: string | null
          id?: number
          image_url?: string | null
          link: string
          mileage?: number | null
          name: string
          price?: string | null
          price_tag?: string | null
          reg_number?: string | null
          search_request_id?: string | null
          year?: number | null
        }
        Update: {
          created_at?: string
          description?: string | null
          details?: Json | null
          estimated_value?: string | null
          estimator?: string | null
          id?: number
          image_url?: string | null
          link?: string
          mileage?: number | null
          name?: string
          price?: string | null
          price_tag?: string | null
          reg_number?: string | null
          search_request_id?: string | null
          year?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "searched_cars_search_request_id_fkey"
            columns: ["search_request_id"]
            isOneToOne: false
            referencedRelation: "search_requests"
            referencedColumns: ["id"]
          },
        ]
      }
      seat_options: {
        Row: {
          created_at: string
          display_name: string
          id: string
          updated_at: string
          value: string
        }
        Insert: {
          created_at?: string
          display_name: string
          id?: string
          updated_at?: string
          value: string
        }
        Update: {
          created_at?: string
          display_name?: string
          id?: string
          updated_at?: string
          value?: string
        }
        Relationships: []
      }
      subscriptions: {
        Row: {
          cancel_at: string | null
          cancel_at_period_end: boolean | null
          canceled_at: string | null
          created: string
          current_period_end: string
          current_period_start: string
          ended_at: string | null
          id: string
          metadata: Json | null
          price_id: string | null
          quantity: number | null
          status: Database["public"]["Enums"]["subscription_status"] | null
          trial_end: string | null
          trial_start: string | null
          user_id: string
        }
        Insert: {
          cancel_at?: string | null
          cancel_at_period_end?: boolean | null
          canceled_at?: string | null
          created?: string
          current_period_end?: string
          current_period_start?: string
          ended_at?: string | null
          id: string
          metadata?: Json | null
          price_id?: string | null
          quantity?: number | null
          status?: Database["public"]["Enums"]["subscription_status"] | null
          trial_end?: string | null
          trial_start?: string | null
          user_id: string
        }
        Update: {
          cancel_at?: string | null
          cancel_at_period_end?: boolean | null
          canceled_at?: string | null
          created?: string
          current_period_end?: string
          current_period_start?: string
          ended_at?: string | null
          id?: string
          metadata?: Json | null
          price_id?: string | null
          quantity?: number | null
          status?: Database["public"]["Enums"]["subscription_status"] | null
          trial_end?: string | null
          trial_start?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "subscriptions_price_id_fkey"
            columns: ["price_id"]
            isOneToOne: false
            referencedRelation: "prices"
            referencedColumns: ["id"]
          },
        ]
      }
      support_tickets: {
        Row: {
          created_at: string
          id: string
          message: string
          subject: string
          user_id: string | null
        }
        Insert: {
          created_at?: string
          id?: string
          message: string
          subject: string
          user_id?: string | null
        }
        Update: {
          created_at?: string
          id?: string
          message?: string
          subject?: string
          user_id?: string | null
        }
        Relationships: []
      }
      transmission_types: {
        Row: {
          created_at: string
          display_name: string
          id: string
          name: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          display_name: string
          id?: string
          name: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          display_name?: string
          id?: string
          name?: string
          updated_at?: string
        }
        Relationships: []
      }
      users: {
        Row: {
          avatar_url: string | null
          full_name: string | null
          id: string | null
          id_test: number
        }
        Insert: {
          avatar_url?: string | null
          full_name?: string | null
          id?: string | null
          id_test?: number
        }
        Update: {
          avatar_url?: string | null
          full_name?: string | null
          id?: string | null
          id_test?: number
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      create_search_request: {
        Args: {
          p_user_id: string
          p_make: string
          p_model: string
          p_postcode: string
          p_min_price?: number
          p_max_price?: number
          p_min_year?: number
          p_max_year?: number
          p_min_mileage?: number
          p_max_mileage?: number
          p_exclude_writeoff?: boolean
          p_distance?: number
          p_body_type?: string
          p_fuel_type?: string
          p_transmission?: string
          p_color?: string
          p_doors?: number
          p_seats?: number
          p_number_of_results?: number
          p_generated_url?: string
          p_title?: string
          p_source?: string
        }
        Returns: string
      }
    }
    Enums: {
      account_type_enum: "personal" | "company"
      checkout_mode: "payment" | "setup" | "subscription"
      checkout_payment_status: "paid" | "unpaid" | "no_payment_required"
      checkout_status: "complete" | "expired" | "open"
      member_role_enum: "Admin"
      pricing_plan_interval: "day" | "week" | "month" | "year"
      pricing_type: "one_time" | "recurring"
      subscription_status:
        | "trialing"
        | "active"
        | "canceled"
        | "incomplete"
        | "incomplete_expired"
        | "past_due"
        | "unpaid"
        | "paused"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DefaultSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      account_type_enum: ["personal", "company"],
      checkout_mode: ["payment", "setup", "subscription"],
      checkout_payment_status: ["paid", "unpaid", "no_payment_required"],
      checkout_status: ["complete", "expired", "open"],
      member_role_enum: ["Admin"],
      pricing_plan_interval: ["day", "week", "month", "year"],
      pricing_type: ["one_time", "recurring"],
      subscription_status: [
        "trialing",
        "active",
        "canceled",
        "incomplete",
        "incomplete_expired",
        "past_due",
        "unpaid",
        "paused",
      ],
    },
  },
} as const
