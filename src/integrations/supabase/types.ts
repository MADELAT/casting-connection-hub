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
      actor_profiles: {
        Row: {
          age: number | null
          bio: string | null
          body_type: string | null
          created_at: string | null
          cv: string | null
          eye_color: string | null
          gender: string | null
          hair_color: string | null
          height: string | null
          id: string
          name: string
          physical_type: string | null
          profile_picture: string | null
          updated_at: string | null
          user_id: string
        }
        Insert: {
          age?: number | null
          bio?: string | null
          body_type?: string | null
          created_at?: string | null
          cv?: string | null
          eye_color?: string | null
          gender?: string | null
          hair_color?: string | null
          height?: string | null
          id?: string
          name: string
          physical_type?: string | null
          profile_picture?: string | null
          updated_at?: string | null
          user_id: string
        }
        Update: {
          age?: number | null
          bio?: string | null
          body_type?: string | null
          created_at?: string | null
          cv?: string | null
          eye_color?: string | null
          gender?: string | null
          hair_color?: string | null
          height?: string | null
          id?: string
          name?: string
          physical_type?: string | null
          profile_picture?: string | null
          updated_at?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "actor_profiles_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      casting_calls: {
        Row: {
          created_at: string | null
          deadline: string | null
          description: string
          id: string
          producer_id: string
          project_id: string
          requirements: string | null
          role_name: string
          status: string | null
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          deadline?: string | null
          description: string
          id?: string
          producer_id: string
          project_id: string
          requirements?: string | null
          role_name: string
          status?: string | null
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          deadline?: string | null
          description?: string
          id?: string
          producer_id?: string
          project_id?: string
          requirements?: string | null
          role_name?: string
          status?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "casting_calls_producer_id_fkey"
            columns: ["producer_id"]
            isOneToOne: false
            referencedRelation: "producer_profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "casting_calls_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "projects"
            referencedColumns: ["id"]
          },
        ]
      }
      casting_submissions: {
        Row: {
          actor_id: string | null
          casting_call_id: string
          id: string
          model_id: string | null
          notes: string | null
          status: string | null
          submission_date: string | null
          thumbnail_url: string | null
          video_url: string | null
        }
        Insert: {
          actor_id?: string | null
          casting_call_id: string
          id?: string
          model_id?: string | null
          notes?: string | null
          status?: string | null
          submission_date?: string | null
          thumbnail_url?: string | null
          video_url?: string | null
        }
        Update: {
          actor_id?: string | null
          casting_call_id?: string
          id?: string
          model_id?: string | null
          notes?: string | null
          status?: string | null
          submission_date?: string | null
          thumbnail_url?: string | null
          video_url?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "casting_submissions_actor_id_fkey"
            columns: ["actor_id"]
            isOneToOne: false
            referencedRelation: "actor_profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "casting_submissions_casting_call_id_fkey"
            columns: ["casting_call_id"]
            isOneToOne: false
            referencedRelation: "casting_calls"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "casting_submissions_model_id_fkey"
            columns: ["model_id"]
            isOneToOne: false
            referencedRelation: "model_profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      model_photos: {
        Row: {
          download_code: string | null
          download_code_expiry: string | null
          download_count: number | null
          download_limit: number | null
          id: string
          model_id: string
          tags: string[] | null
          thumbnail_url: string | null
          title: string | null
          upload_date: string | null
          url: string
        }
        Insert: {
          download_code?: string | null
          download_code_expiry?: string | null
          download_count?: number | null
          download_limit?: number | null
          id?: string
          model_id: string
          tags?: string[] | null
          thumbnail_url?: string | null
          title?: string | null
          upload_date?: string | null
          url: string
        }
        Update: {
          download_code?: string | null
          download_code_expiry?: string | null
          download_count?: number | null
          download_limit?: number | null
          id?: string
          model_id?: string
          tags?: string[] | null
          thumbnail_url?: string | null
          title?: string | null
          upload_date?: string | null
          url?: string
        }
        Relationships: [
          {
            foreignKeyName: "model_photos_model_id_fkey"
            columns: ["model_id"]
            isOneToOne: false
            referencedRelation: "model_profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      model_profiles: {
        Row: {
          age: number | null
          bio: string | null
          body_type: string | null
          created_at: string | null
          eye_color: string | null
          gender: string | null
          hair_color: string | null
          height: string | null
          id: string
          name: string
          profile_picture: string | null
          updated_at: string | null
          user_id: string
        }
        Insert: {
          age?: number | null
          bio?: string | null
          body_type?: string | null
          created_at?: string | null
          eye_color?: string | null
          gender?: string | null
          hair_color?: string | null
          height?: string | null
          id?: string
          name: string
          profile_picture?: string | null
          updated_at?: string | null
          user_id: string
        }
        Update: {
          age?: number | null
          bio?: string | null
          body_type?: string | null
          created_at?: string | null
          eye_color?: string | null
          gender?: string | null
          hair_color?: string | null
          height?: string | null
          id?: string
          name?: string
          profile_picture?: string | null
          updated_at?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "model_profiles_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      notifications: {
        Row: {
          created_at: string | null
          id: string
          message: string
          read: boolean | null
          related_id: string | null
          type: string
          user_id: string
        }
        Insert: {
          created_at?: string | null
          id?: string
          message: string
          read?: boolean | null
          related_id?: string | null
          type: string
          user_id: string
        }
        Update: {
          created_at?: string | null
          id?: string
          message?: string
          read?: boolean | null
          related_id?: string | null
          type?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "notifications_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      producer_profiles: {
        Row: {
          bio: string | null
          company_name: string | null
          created_at: string | null
          id: string
          position: string | null
          updated_at: string | null
          user_id: string
        }
        Insert: {
          bio?: string | null
          company_name?: string | null
          created_at?: string | null
          id?: string
          position?: string | null
          updated_at?: string | null
          user_id: string
        }
        Update: {
          bio?: string | null
          company_name?: string | null
          created_at?: string | null
          id?: string
          position?: string | null
          updated_at?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "producer_profiles_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      profiles: {
        Row: {
          created_at: string | null
          email: string
          id: string
          is_premium: boolean | null
          name: string
          profile_completed: boolean | null
          updated_at: string | null
          user_type: string
        }
        Insert: {
          created_at?: string | null
          email: string
          id: string
          is_premium?: boolean | null
          name: string
          profile_completed?: boolean | null
          updated_at?: string | null
          user_type: string
        }
        Update: {
          created_at?: string | null
          email?: string
          id?: string
          is_premium?: boolean | null
          name?: string
          profile_completed?: boolean | null
          updated_at?: string | null
          user_type?: string
        }
        Relationships: []
      }
      projects: {
        Row: {
          created_at: string | null
          description: string | null
          id: string
          name: string
          producer_id: string
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          description?: string | null
          id?: string
          name: string
          producer_id: string
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          description?: string | null
          id?: string
          name?: string
          producer_id?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "projects_producer_id_fkey"
            columns: ["producer_id"]
            isOneToOne: false
            referencedRelation: "producer_profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      video_clips: {
        Row: {
          actor_id: string
          description: string | null
          download_code: string | null
          download_code_expiry: string | null
          download_count: number | null
          download_limit: number | null
          duration: number | null
          id: string
          tags: string[] | null
          thumbnail_url: string | null
          title: string
          upload_date: string | null
          url: string
        }
        Insert: {
          actor_id: string
          description?: string | null
          download_code?: string | null
          download_code_expiry?: string | null
          download_count?: number | null
          download_limit?: number | null
          duration?: number | null
          id?: string
          tags?: string[] | null
          thumbnail_url?: string | null
          title: string
          upload_date?: string | null
          url: string
        }
        Update: {
          actor_id?: string
          description?: string | null
          download_code?: string | null
          download_code_expiry?: string | null
          download_count?: number | null
          download_limit?: number | null
          duration?: number | null
          id?: string
          tags?: string[] | null
          thumbnail_url?: string | null
          title?: string
          upload_date?: string | null
          url?: string
        }
        Relationships: [
          {
            foreignKeyName: "video_clips_actor_id_fkey"
            columns: ["actor_id"]
            isOneToOne: false
            referencedRelation: "actor_profiles"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof PublicSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof PublicSchema["CompositeTypes"]
    ? PublicSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never
